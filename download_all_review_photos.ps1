$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$ref = "https://danielfooddiary.com/2025/03/27/168currychicken/"
$targetDir = "C:\Users\ADMIN\.gemini\antigravity\scratch\168-curry-chicken-website\assets"
$brainDir = "C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8"

$map = [ordered]@{
    "hero_curry.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168-Curry-Chicken-A-Taste-of-Tradition-at-Old-Airport-Road-Food-Centre.jpg"
    "stall_banner.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken11.jpg"
    "curry_noodle.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken6.jpg"
    "family_box.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken9.jpg"
    "real_drumstick.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken3.jpg"
    "real_stall_front.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken10.jpg"
    "curry_potato.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken5.jpg"
    "curry_prata.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken4.jpg"
    "curry_bread.jpg" = "https://danielfooddiary.com/wp-content/uploads/2025/02/168currychicken7.jpg"
}

foreach ($fileName in $map.Keys) {
    $url = $map[$fileName]
    $outPath = Join-Path $targetDir $fileName
    Write-Host "Downloading $fileName from $url..."
    & curl.exe -s -L -A $ua -e $ref $url -o $outPath
    $size = (Get-Item $outPath).Length
    Write-Host "Downloaded $fileName ($size bytes)"
    
    $brainPath = Join-Path $brainDir $fileName
    Copy-Item $outPath $brainPath -Force
}
Write-Host "All authentic photos processing complete!"
