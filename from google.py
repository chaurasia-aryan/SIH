from google.cloud import vision
import io

def detect_labels(image_path):
    """Detects labels in an image file."""
    
    # Initialize the Vision client
    client = vision.ImageAnnotatorClient()

    # Load the image file into memory
    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()

    # Construct an image instance
    image = vision.Image(content=content)

    # Perform label detection on the image file
    response = client.label_detection(image=image)
    labels = response.label_annotations

    # Print detected labels
    for label in labels:
        print(label.description, label.score)

    # Handle errors
    if response.error.message:
        raise Exception(f'{response.error.message}')

# Example usage
if __name__ == "__main__":
    detect_labels('path_to_your_image.jpg')


