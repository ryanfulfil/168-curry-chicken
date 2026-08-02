$text = [System.IO.File]::ReadAllText("C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8\.system_generated\steps\56\content.md")
$regex = [regex]'https://danielfooddiary\.com/wp-content/uploads/2025/02/[a-zA-Z0-9_\-]+\.jpg'
$matches = $regex.Matches($text)
$unique = @()
foreach ($m in $matches) {
    if ($unique -notcontains $m.Value) {
        $unique += $m.Value
    }
}
$unique
