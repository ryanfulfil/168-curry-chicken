$path = "C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8\.system_generated\steps\56\content.md"
$content = Get-Content -Path $path -Raw
$matches = [regex]::Matches($content, 'https://danielfooddiary\.com/wp-content/uploads/2025/02/[a-zA-Z0-9_-]+\.jpg')
$urls = @()
foreach ($m in $matches) {
    $urls += $m.Value
}
$urls | Select-Object -Unique
