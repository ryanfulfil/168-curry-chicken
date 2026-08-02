$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$ref = "https://danielfooddiary.com/2025/03/27/168currychicken/"

$photos = @(
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168-Curry-Chicken-A-Taste-of-Tradition-at-Old-Airport-Road-Food-Centre.jpg"; file = "hero_curry.jpg" },
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken6.jpg"; file = "curry_noodle.jpg" },
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken9.jpg"; file = "family_box.jpg" },
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken11.jpg"; file = "stall_banner.jpg" },
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken3.jpg"; file = "real_drumstick.jpg" },
    @{ url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken10.jpg"; file = "real_stall_front.jpg" }
)

$targetDir = "C:\Users\ADMIN\.gemini\antigravity\scratch\168-curry-chicken-website\assets"
$brainDir = "C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8"

foreach ($p in $photos) {
    $outPath = Join-Path $targetDir $p.file
    Write-Host "Downloading $($p.file)..."
    curl.exe -s -L -A $ua -e $ref $p.url -o $outPath
    $brainPath = Join-Path $brainDir $p.file
    Copy-Item $outPath $brainPath -Force
    $size = (Get-Item $outPath).Length
    Write-Host "Success: $($p.file) ($size bytes)"
}
Write-Host "All authentic photos downloaded successfully!"
