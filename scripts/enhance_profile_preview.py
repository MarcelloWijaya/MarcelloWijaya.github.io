"""Generate a conservative, identity-preserving HD preview of the existing profile photo.
Do not change facial structure, pose, clothing, framing or background.
This only enhances detail already present in the photo; it cannot recover truly missing detail.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageFilter

source = Path("public/assets/profile.jpg")
target = Path("preview/mww-profile-hd-1800.jpg")
target.parent.mkdir(parents=True, exist_ok=True)

with Image.open(source) as original:
    photo = ImageOps.exif_transpose(original).convert("RGB")
    w, h = photo.size
    # Subtle luma/detail sharpening; retain the original identity and skin texture.
    photo = photo.filter(ImageFilter.UnsharpMask(radius=1.10, percent=92, threshold=3))
    enlarged = photo.resize((w * 2, h * 2), resample=Image.Resampling.LANCZOS)
    enlarged = enlarged.filter(ImageFilter.UnsharpMask(radius=1.35, percent=88, threshold=3))
    enlarged.save(target, format="JPEG", quality=95, subsampling=0, optimize=True, progressive=True)
    print(f"Source {w}x{h} -> HD preview {enlarged.width}x{enlarged.height}: {target} ({target.stat().st_size} bytes)")
