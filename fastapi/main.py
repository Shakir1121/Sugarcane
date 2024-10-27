from fastapi import FastAPI,File,UploadFile
from PIL import Image
from io import BytesIO
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import tensorflow as tf

app = FastAPI()
origins = [
    #Running React js server (Front End)
    "http://localhost:5173",
    
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Loading the model and classnames 
MODEL = tf.keras.models.load_model("../../base_models/Ensemble_Model")

CLASS_NAMES = ['Bacterial_Blight', 'Healthy_Leaf', 'Red_Rot']

# Function to preprocess an image for prediction
def preprocess_image(img):
    img = img.resize((224, 224))
    img_array = np.array(img)
     # Normalize pixel values
    img_array = img_array / 255.0 
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Read file as Image
    img = Image.open(BytesIO(await file.read()))

    # Preprocess the image
    img_array = preprocess_image(img)

    # Make predictions
    predictions = MODEL.predict(img_array)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])

    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }
if __name__ == "__main__":
    #server run on localhost:8000    
    uvicorn.run(app, host='localhost', port=8000)