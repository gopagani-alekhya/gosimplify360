
# GoSimplify360 - Local Log Monitoring

$logPath = Join-Path $PSScriptRoot "sample-logs\website-access.log"

if (-not (Test-Path $logPath)) {
    Write-Host "ERROR: Log file not found." -ForegroundColor Red
    exit
}

$logs = Import-Csv $logPath

Write-Host "`n=== GoSimplify360 Monitoring Dashboard ===" -ForegroundColor Cyan

# Count total requests
$totalRequests = $logs.Count

# Count HTTP status codes
Write-Host "`nHTTP Status Code Summary:" -ForegroundColor Cyan

$logs | Group-Object status | Sort-Object Name | ForEach-Object {
    Write-Host "HTTP $($_.Name): $($_.Count) request(s)"
}

# Identify errors
$errors = @(
    $logs | Where-Object { [int]$_.status -ge 400 }
)

# Classify errors
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

# Identify high-priority errors
$highPriorityErrors = @(
    $classifiedErrors | Where-Object {
        $_.Priority -eq "HIGH"
    }
)

if ($highPriorityErrors.Count -gt 0) {
    Write-Host "`n!!! HIGH PRIORITY ALERT !!!" -ForegroundColor Red

    foreach ($item in $highPriorityErrors) {
        Write-Host "Endpoint: $($item.Path)" -ForegroundColor Red
        Write-Host "Issue: $($item.Message)" -ForegroundColor Yellow
    }
}
else {
    Write-Host "`nNo high-priority errors detected." -ForegroundColor Green
}

# Final monitoring summary
Write-Host "`n=== Monitoring Summary ===" -ForegroundColor Cyan
Write-Host "Total requests: $totalRequests"
Write-Host "Total errors: $($errors.Count)"
Write-Host "High-priority errors: $($highPriorityErrors.Count)"

Write-Host "`nMonitoring completed." -ForegroundColor Green
