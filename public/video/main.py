import os
import subprocess
from pathlib import Path

def convert_mp4_to_webm(directory_path, remove_original=False):
    """
    Scans a directory for .mp4 files and converts them to optimized webM (VP9/Opus).
    """
    dir_path = Path(directory_path)
    
    if not dir_path.exists() or not dir_path.is_dir():
        print(f"Error: The directory '{directory_path}' does not exist.")
        return

    # Find all .mp4 files (case-insensitive)
    mp4_files = [f for f in dir_path.iterdir() if f.suffix.lower() == '.mp4']
    
    if not mp4_files:
        print("No .mp4 files found in the specified directory.")
        return

    print(f"Found {len(mp4_files)} MP4 file(s) to convert.\n")

    for mp4_file in mp4_files:
        # Define the output path with the .webm extension
        webm_file = mp4_file.with_suffix('.webm')
        
        print(f"Converting: {mp4_file.name} -> {webm_file.name}")
        
        # FFmpeg command optimized for Web webM creation
        # -c:v libvpx-vp9 : Uses the VP9 video codec
        # -crf 30         : Constant Rate Factor (Quality scale 0-63; 15-35 is standard for web, lower means better quality/larger file)
        # -b:v 0          : Required when using CRF with VP9 to let CRF control the bitrate
        # -c:a libopus    : Uses the highly efficient Opus audio codec
        command = [
            'ffmpeg',
            '-y',                      # Overwrite output file if it exists
            '-i', str(mp4_file),       # Input file path
            '-c:v', 'libvpx-vp9',      # Video codec
            '-crf', '30',              # Quality target (adjust lower for higher quality)
            '-b:v', '0',               # Enable constant quality mode
            '-c:a', 'libopus',         # Audio codec
            str(webm_file)             # Output file path
        ]
        
        try:
            # Execute the conversion
            # stdout/stderr suppression keeps the Python console clean; remove them if you need to debug errors.
            subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            print(f"Successfully converted: {webm_file.name}")
            
            # Optional: Delete the original MP4 if requested
            if remove_original:
                os.remove(mp4_file)
                print(f"Removed original file: {mp4_file.name}")
                
        except subprocess.CalledProcessError:
            print(f"Error: Failed to convert {mp4_file.name}. Make sure FFmpeg is installed.")
        except Exception as e:
            print(f"An unexpected error occurred with {mp4_file.name}: {e}")
            
        print("-" * 40)

if __name__ == "__main__":
    # Replace this with the actual path to your videos directory
    # You can use a relative path like "./videos" or an absolute path
    TARGET_DIRECTORY = "./videos" 
    
    # Run the script (Set remove_original=True if you want to auto-delete the mp4s)
    convert_mp4_to_webm(TARGET_DIRECTORY, remove_original=False)