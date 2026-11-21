
# GoSimplify360 - Local Log Monitoring

$logPath = Join-Path $PSScriptRoot "sample-logs\website-access.log"

if (-not (Test-Path $logPath)) {
    Write-Host "ERROR: Log file not found." -ForegroundColor Red
    exit
}

$logs = Import-Csv $logPath

Write-Host "`n=== GoSimplify360 Monitoring Dashboard ===" -ForegroundColor Cyan

$errors = $logs | Where-Object { [int]$_.status -ge 400 }

$classifiedErrors = foreach ($log in $errors) {
    $priority = switch ([int]$log.status) {
        500 { "HIGH" }
        403 { "MEDIUM" }
        404 { "LOW" }
        default { "REVIEW" }
    }

    [PSCustomObject]@{
        Status   = $log.status
        Path     = $log.path
        Priority = $priority
        Message  = $log.message
    }
}

Write-Host "`nError Priority Report:" -ForegroundColor Yellow
$classifiedErrors | Format-Table -AutoSize

$highPriorityErrors = @(
    $classifiedErrors | Where-Object { $_.Priority -eq "HIGH" }
)

if ($highPriorityErrors.Count -gt 0) {
    Write-Host "`n!!! HIGH PRIORITY ALERT !!!" -ForegroundColor Red

    foreach ($item in $highPriorityErrors) {
        Write-Host "Endpoint: $($item.Path)" -ForegroundColor Red
        Write-Host "Issue: $($item.Message)" -ForegroundColor Yellow
    }
}

Write-Host "`nTotal errors detected: $($errors.Count)" -ForegroundColor Red
Write-Host "`nMonitoring completed." -ForegroundColor Green
