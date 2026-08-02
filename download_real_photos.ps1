$items = @(
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168-Curry-Chicken-A-Taste-of-Tradition-at-Old-Airport-Road-Food-Centre.jpg"; Name = "hero_curry.jpg" },
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken6.jpg"; Name = "curry_noodle.jpg" },
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken9.jpg"; Name = "family_box.jpg" },
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken11.jpg"; Name = "stall_banner.jpg" },
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken3.jpg"; Name = "real_drumstick.jpg" },
    @{ Url = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken10.jpg"; Name = "real_stall_front.jpg" }
)

$targetDir = "C:\Users\ADMIN\.gemini\antigravity\scratch\168-curry-chicken-website\assets"
$brainDir = "C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8"
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$headers = @{ "Referer" = "https://danielfooddiary.com/" }

foreach ($item in $items) {
    $filePath = Join-Path $targetDir $item.Name
    Write-Host "Downloading $($item.Name)..."
    try {
        Invoke-WebRequest -Uri $item.Url -OutFile $filePath -UserAgent $ua -Headers $headers -UseBasicParsing
        $brainPath = Join-Path $brainDir $item.Name
        Copy-Item $filePath $brainPath -Force
        Write-Host "Success: $($item.Name)"
    } catch {
        Write-Host "Error downloading $($item.Name): $_"
    }
}
