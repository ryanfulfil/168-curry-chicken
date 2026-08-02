Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\ADMIN\.gemini\antigravity\scratch\168-curry-chicken-website\assets\real_stall_front.jpg"
$targetDir = "C:\Users\ADMIN\.gemini\antigravity\scratch\168-curry-chicken-website\assets"
$brainDir = "C:\Users\ADMIN\.gemini\antigravity\brain\af0b30f7-dfe8-491c-bd0b-e55e196421d8"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height
Write-Host "Source image dimensions: ${w}x${h}"

# The red menu board sits across the upper-middle area of the stall (y: 30% to 54%)
# Coordinates normalized relative to width and height
$crops = @(
    @{ Name = "menu_curry_chicken.jpg"; X = 0.150; Y = 0.300; W = 0.120; H = 0.240 },
    @{ Name = "menu_curry_noodle.jpg";  X = 0.250; Y = 0.300; W = 0.120; H = 0.240 },
    @{ Name = "menu_curry_rice.jpg";    X = 0.350; Y = 0.300; W = 0.130; H = 0.240 },
    @{ Name = "menu_curry_bread.jpg";   X = 0.460; Y = 0.300; W = 0.140; H = 0.240 },
    @{ Name = "menu_curry_prata.jpg";   X = 0.600; Y = 0.300; W = 0.160; H = 0.240 },
    @{ Name = "menu_family_box.jpg";   X = 0.750; Y = 0.300; W = 0.160; H = 0.240 }
)

foreach ($c in $crops) {
    $cropX = [int]($w * $c.X)
    $cropY = [int]($h * $c.Y)
    $cropW = [int]($w * $c.W)
    $cropH = [int]($h * $c.H)

    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $cropped = $src.Clone($rect, $src.PixelFormat)
    
    $outPath = Join-Path $targetDir $c.Name
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropped.Dispose()

    $brainPath = Join-Path $brainDir $c.Name
    Copy-Item $outPath $brainPath -Force
    Write-Host "Cropped $($c.Name) ($cropW x $cropH px)"
}

$src.Dispose()
Write-Host "All menu dish photos cropped successfully from stall photo!"
