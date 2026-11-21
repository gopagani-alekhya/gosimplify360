
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

// Custom GoSimplify360 logo
function Logo({ footer = false }) {
  return (
    <div className={`brand ${footer ? "footer-brand" : ""}`}>
      <svg
        className="brand-icon"
        viewBox="0 0 100 100"
        role="img"
        aria-label="GoSimplify360 logo"
      >
        <defs>
          <linearGradient id="logoBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#087bff" />
            <stop offset="100%" stopColor="#073cce" />
          </linearGradient>
        </defs>
        <path
          d="M77 23A39 39 0 1 0 84 65"
          fill="none"
          stroke="url(#logoBlue)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M22 60c17 15 38 10 55-8"
          fill="none"
          stroke="#087bff"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path d="M52 47 91 13 84 48 74 38 57 54Z" fill="#10c98b" />
      </svg>
      <span>
        GoSimplify<span className="brand-blue">360</span>
      </span>
    </div>
  );
}

const tools = [
  {
    name: "Word Counter",
    icon: "📝",
    description: "Count words, characters and sentences.",
    category: "Text Tools",
  },
  {
    name: "Age Calculator",
    icon: "🎂",
    description: "Calculate your age in seconds.",
    category: "Calculators",
  },
  {
    name: "QR Code Generator",
    icon: "▦",
    description: "Create QR codes from your text or links.",
    category: "Generators",
  },
  {
    name: "Unit Converter",
    icon: "📏",
    description: "Convert units quickly and easily.",
    category: "Converters",
  },
  {
    name: "Password Generator",
    icon: "🔐",
    description: "Generate random passwords.",
    category: "Generators",
  },
  {
    name: "Percentage Calculator",
    icon: "%",
    description: "Calculate percentages with ease.",
    category: "Calculators",
  },
];

function App() {
  const [activeTool, setActiveTool] = useState("");
  const [search, setSearch] = useState("");

  // Word counter
  const [text, setText] = useState("");

  // QR generator
  const [qrText, setQrText] = useState("https://gosimplify360.in");

  // Age calculator
  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  // Unit converter
  const [unitType, setUnitType] = useState("Length");
  const [unitValue, setUnitValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");
  const [unitResult, setUnitResult] = useState(null);

  // Password generator
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // Percentage calculator
  const [percentage, setPercentage] = useState("10");
  const [percentageOf, setPercentageOf] = useState("100");
  const [percentResult, setPercentResult] = useState(null);

  const filteredTools = tools.filter((tool) =>
    `${tool.name} ${tool.description} ${tool.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openTool = (name) => {
    setActiveTool(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setActiveTool("");
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select your date of birth.");
      return;
    }

    const birth = new Date(`${birthDate}T00:00:00`);
    const today = new Date();

    if (birth > today) {
      alert("Date of birth cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult({ years, months, days });
  };

  const conversionRates = {
    Length: {
      Meter: 1,
      Kilometer: 1000,
      Centimeter: 0.01,
      Mile: 1609.344,
      Foot: 0.3048,
      Inch: 0.0254,
    },
    Weight: {
      Kilogram: 1,
      Gram: 0.001,
      Pound: 0.45359237,
      Ounce: 0.0283495,
    },
  };

  const convertUnit = () => {
    const value = Number(unitValue);
    const rates = conversionRates[unitType];

    if (!Number.isFinite(value) || !rates) {
      alert("Please enter a valid number.");
      return;
    }

    const result = (value * rates[fromUnit]) / rates[toUnit];
    setUnitResult(result);
  };

  const unitOptions = Object.keys(conversionRates[unitType]);

  const changeUnitType = (type) => {
    setUnitType(type);
    const options = Object.keys(conversionRates[type]);
    setFromUnit(options[0]);
    setToUnit(options[1]);
    setUnitResult(null);
  };

  const generatePassword = () => {
    let characters = "";
    const groups = [];

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      groups.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
      groups.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (includeNumbers) {
      characters += "0123456789";
      groups.push("0123456789");
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+-=[]{}?";
      groups.push("!@#$%^&*()_+-=[]{}?");
    }

    if (!characters) {
      setPasswordMessage("Select at least one character type.");
      setPassword("");
      return;
    }

    const randomIndex = (max) => {
      const random = new Uint32Array(1);
      const limit = Math.floor(4294967296 / max) * max;

      do {
        window.crypto.getRandomValues(random);
      } while (random[0] >= limit);

      return random[0] % max;
    };

    const result = [];

    groups.forEach((group) => {
      if (result.length < Number(passwordLength)) {
        result.push(group[randomIndex(group.length)]);
      }
    });

    while (result.length < Number(passwordLength)) {
      result.push(characters[randomIndex(characters.length)]);
    }

    for (let i = result.length - 1; i > 0; i--) {
      const j = randomIndex(i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }

    setPassword(result.join(""));
    setPasswordMessage("");
  };

  const copyPassword = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setPasswordMessage("Password copied!");
    } catch {
      setPasswordMessage("Copy was unavailable. Select and copy the password.");
    }
  };

  const calculatePercentage = () => {
    const p = Number(percentage);
    const total = Number(percentageOf);

    if (
      percentage.trim() === "" ||
      percentageOf.trim() === "" ||
      !Number.isFinite(p) ||
      !Number.isFinite(total)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    setPercentResult((p / 100) * total);
  };

  const downloadQR = () => {
    const svg = document.querySelector("#qr-code svg");

    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "gosimplify360-qr-code.svg";
    link.click();

    URL.revokeObjectURL(url);
  };

  const scrollToSection = (id) => {
    if (activeTool) {
      setActiveTool("");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;
  const sentenceCount = text.trim()
    ? text.split(/[.!?]+/).filter((sentence) => sentence.trim()).length
    : 0;

  const renderToolHeader = (name) => (
    <div className="tool-heading">
      <button className="back-button" onClick={goHome}>
        ← Back to Home
      </button>
      <h1>{name}</h1>
      <p>Simple, free and easy-to-use online tool.</p>
    </div>
  );

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-inner">
          <button className="logo-button" onClick={goHome} aria-label="Go to homepage">
            <Logo />
          </button>

          <nav className="nav-links">
            <button className={!activeTool ? "nav-active" : ""} onClick={goHome}>
              Home
            </button>
            <button onClick={() => scrollToSection("tools")}>All Tools</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <div className="nav-actions">
            <button
              className="login-button"
              onClick={() => alert("Login functionality will be added in a future version.")}
            >
              Log In
            </button>
            <button
              className="signup-button"
              onClick={() => alert("Sign Up functionality will be added in a future version.")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {activeTool ? (
        <main className="tool-screen">
          {renderToolHeader(activeTool)}

          {activeTool === "Word Counter" && (
            <section className="tool-panel">
              <label htmlFor="word-text">Enter or paste your text</label>
              <textarea
                id="word-text"
                className="tool-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing or paste your text here..."
              />
              <div className="stats-grid">
                <div className="stat-card">
                  <strong>{wordCount}</strong>
                  <span>Words</span>
                </div>
                <div className="stat-card">
                  <strong>{characterCount}</strong>
                  <span>Characters</span>
                </div>
                <div className="stat-card">
                  <strong>{sentenceCount}</strong>
                  <span>Sentences</span>
                </div>
              </div>
              <button className="primary-button" onClick={() => setText("")}>
                Clear Text
              </button>
            </section>
          )}

          {activeTool === "Age Calculator" && (
            <section className="tool-panel">
              <label htmlFor="birth-date">Select your date of birth</label>
              <input
                id="birth-date"
                className="form-input"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
              <button className="primary-button" onClick={calculateAge}>
                Calculate Age
              </button>
              {ageResult && (
                <div className="result-panel">
                  <h3>Your Age</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <strong>{ageResult.years}</strong>
                      <span>Years</span>
                    </div>
                    <div className="stat-card">
                      <strong>{ageResult.months}</strong>
                      <span>Months</span>
                    </div>
                    <div className="stat-card">
                      <strong>{ageResult.days}</strong>
                      <span>Days</span>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {activeTool === "QR Code Generator" && (
            <section className="tool-panel qr-panel">
              <label htmlFor="qr-input">Enter text or website URL</label>
              <input
                id="qr-input"
                className="form-input"
                value={qrText}
                onChange={(e) => setQrText(e.target.value)}
                placeholder="Enter text or URL..."
              />
              {qrText.trim() ? (
                <div id="qr-code" className="qr-output">
                  <QRCodeSVG value={qrText} size={220} level="H" includeMargin />
                </div>
              ) : (
                <p className="muted">Enter text to generate your QR code.</p>
              )}
              <button
                className="primary-button"
                onClick={downloadQR}
                disabled={!qrText.trim()}
              >
                Download QR Code
              </button>
            </section>
          )}

          {activeTool === "Unit Converter" && (
            <section className="tool-panel">
              <label htmlFor="unit-type">Conversion category</label>
              <select
                id="unit-type"
                className="form-input"
                value={unitType}
                onChange={(e) => changeUnitType(e.target.value)}
              >
                <option value="Length">Length</option>
                <option value="Weight">Weight</option>
              </select>

              <label htmlFor="unit-value">Enter value</label>
              <input
                id="unit-value"
                className="form-input"
                type="number"
                value={unitValue}
                onChange={(e) => setUnitValue(e.target.value)}
                placeholder="Enter a value"
              />

              <div className="two-fields">
                <div>
                  <label htmlFor="from-unit">From</label>
                  <select
                    id="from-unit"
                    className="form-input"
                    value={fromUnit}
                    onChange={(e) => {
                      setFromUnit(e.target.value);
                      setUnitResult(null);
                    }}
                  >
                    {unitOptions.map((unit) => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="to-unit">To</label>
                  <select
                    id="to-unit"
                    className="form-input"
                    value={toUnit}
                    onChange={(e) => {
                      setToUnit(e.target.value);
                      setUnitResult(null);
                    }}
                  >
                    {unitOptions.map((unit) => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="primary-button" onClick={convertUnit}>
                Convert
              </button>

              {unitResult !== null && (
                <div className="result-panel">
                  <span>Converted result</span>
                  <h2>{unitResult.toLocaleString(undefined, {
                    maximumFractionDigits: 8,
                  })} {toUnit}</h2>
                </div>
              )}
            </section>
          )}

          {activeTool === "Password Generator" && (
            <section className="tool-panel">
              <label htmlFor="password-length">Password length: {passwordLength}</label>
              <input
                id="password-length"
                type="range"
                min="6"
                max="32"
                value={passwordLength}
                onChange={(e) => setPasswordLength(Number(e.target.value))}
                className="range-input"
              />

              <div className="check-list">
                <label>
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                  />
                  Uppercase letters (A-Z)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                  />
                  Lowercase letters (a-z)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                  />
                  Numbers (0-9)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                  />
                  Symbols (!@#$...)
                </label>
              </div>

              <button className="primary-button" onClick={generatePassword}>
                Generate Password
              </button>

              {password && (
                <div className="password-output">
                  <code>{password}</code>
                  <button className="secondary-button" onClick={copyPassword}>
                    Copy
                  </button>
                </div>
              )}
              {passwordMessage && <p className="status-message">{passwordMessage}</p>}
            </section>
          )}

          {activeTool === "Percentage Calculator" && (
            <section className="tool-panel">
              <p className="muted">Calculate what percentage of a number equals.</p>
              <label htmlFor="percentage">Percentage (%)</label>
              <input
                id="percentage"
                className="form-input"
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
              />
              <label htmlFor="percentage-of">Number</label>
              <input
                id="percentage-of"
                className="form-input"
                type="number"
                value={percentageOf}
                onChange={(e) => setPercentageOf(e.target.value)}
                placeholder="Enter number"
              />
              <button className="primary-button" onClick={calculatePercentage}>
                Calculate
              </button>
              {percentResult !== null && (
                <div className="result-panel">
                  <span>Result</span>
                  <h2>{percentResult.toLocaleString(undefined, {
                    maximumFractionDigits: 8,
                  })}</h2>
                </div>
              )}
            </section>
          )}
        </main>
      ) : (
        <>
          <main>
            <section className="hero">
              <div className="hero-inner">
                <div className="hero-copy">
                  <div className="eyebrow">
                    <span>✦</span> SIMPLE TOOLS. SMARTER WORK.
                  </div>
                  <h1>
                    Everything you need,
                    <span> simplified.</span>
                  </h1>
                  <p>
                    Discover free online tools that make everyday tasks
                    faster, easier and more productive.
                  </p>

                  <form
                    className="hero-search"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const match = tools.find((tool) =>
                        tool.name.toLowerCase().includes(search.toLowerCase())
                      );
                      if (match) openTool(match.name);
                      else scrollToSection("tools");
                    }}
                  >
                    <span className="search-icon">⌕</span>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search for a tool..."
                      aria-label="Search for a tool"
                    />
                    <button type="submit">Search</button>
                  </form>

                  <div className="hero-benefits">
                    <span><b>✓</b> Free to use</span>
                    <span><b>✓</b> No downloads</span>
                    <span><b>✓</b> Easy to use</span>
                  </div>
                </div>

                <div className="hero-art" aria-label="GoSimplify360 tools illustration">
                  <div className="art-blob"></div>
                  <div className="floating-icon icon-calculator">▦</div>
                  <div className="floating-icon icon-qr">▦</div>
                  <div className="floating-icon icon-lock">🔒</div>
                  <div className="floating-icon icon-doc">▤</div>
                  <div className="floating-icon icon-ruler">📏</div>
                  <div className="laptop">
                    <div className="laptop-screen">
                      <Logo />
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="tools-section" id="tools">
              <div className="section-heading">
                <div>
                  <span className="section-tag">OUR COLLECTION</span>
                  <h2>Explore our tools</h2>
                  <p>Everything you need, all in one place.</p>
                </div>
                <span className="tool-count">{filteredTools.length} tools</span>
              </div>

              <div className="tools-grid">
                {filteredTools.map((tool) => (
                  <button
                    className="tool-card"
                    key={tool.name}
                    onClick={() => openTool(tool.name)}
                  >
                    <span className={`tool-icon ${tool.name === "Percentage Calculator" ? "percent-icon" : ""}`}>
                      {tool.icon}
                    </span>
                    <span className="tool-card-content">
                      <strong>{tool.name}</strong>
                      <span>{tool.description}</span>
                      <b>Explore tool →</b>
                    </span>
                  </button>
                ))}
                {filteredTools.length === 0 && (
                  <p className="no-results">No tools found. Try another search.</p>
                )}
              </div>
            </section>

            <section className="why-strip" id="about">
              <div className="why-intro">
                <h2>Why GoSimplify360?</h2>
                <p>Less complexity. More productivity.</p>
              </div>
              <div className="why-item">
                <span>⚡</span>
                <div><strong>Fast &amp; Reliable</strong><small>Get results instantly</small></div>
              </div>
              <div className="why-item">
                <span>❤️</span>
                <div><strong>100% Free</strong><small>No hidden costs</small></div>
              </div>
              <div className="why-item">
                <span>🚀</span>
                <div><strong>User Friendly</strong><small>Designed for everyone</small></div>
              </div>
              <button className="contact-button" onClick={() => scrollToSection("contact")}>
                Contact us →
              </button>
            </section>
          </main>

          <footer className="footer" id="contact">
            <div className="footer-inner">
              <button className="logo-button" onClick={goHome}>
                <Logo footer />
              </button>
              <p className="copyright">
                © 2026 GoSimplify360. All rights reserved.
              </p>
              <nav className="footer-links">
                <button onClick={goHome}>Home</button>
                <button onClick={() => scrollToSection("tools")}>All Tools</button>
                <button onClick={() => scrollToSection("about")}>About</button>
                <a href="mailto:hello@gosimplify360.in">Contact</a>
              </nav>
              <div className="social-links">
                <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer">▶</a>
                <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer">⌘</a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
                <a href="https://x.com/" aria-label="X" target="_blank" rel="noreferrer">𝕏</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
