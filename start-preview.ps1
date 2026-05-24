$NodePath = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$ServerPath = Join-Path $PSScriptRoot "server.mjs"

if (-not (Test-Path $NodePath)) {
  Write-Error "Bundled Node runtime was not found at $NodePath"
  exit 1
}

& $NodePath $ServerPath
