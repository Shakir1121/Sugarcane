# Sugarcane-Leaf-Disease-Prediction-Using-Deep-Learning
# 1. Introduction:
Sugarcane farming is vulnerable to various diseases that can significantly impact crop yield and quality. Traditional disease detection methods are time-consuming and require expertise. This project utilizes deep learning custom (CNN) and transfer learning techniques(InceptionV3,MobileNetV2,DenseNet121) combine these  models using weighted average to automate disease detection, enhancing accuracy and reducing the time required for farmers to identify affected crops. By analyzing images of sugarcane leaves, the model can efficiently predict diseases such as Bacterial Blight and Red Rot and healthy, offering a timely solution to farmers.
# 2. Problem Statement:
Sugarcane diseases can have a big negative impact on crop output and quality, effect in financial losses for farms and the sugar business. Manually detection of diseases based on expert reviews, which can be time-consuming and may be to human mistake and also tough. Therefore to solve problem a reliable, automated method is needed which is used in this project for the early identification and evaluation of illnesses affecting sugarcane. 
# 3. Methodology:
## 3.1 Dataset:
The dataset are obtained from the kaggle link as (https://www.kaggle.com/datasets/prabhakaransoundar/sugarcane-disease-dataset)<br> contains a 300 sugarcane leaf disease images." The dataset is a collection of sugarcane leaf disease images. Every image having different dimensions. The (RGB) images representing the 3 color channels (Red, Green,Blue).The dataset contains sugarcane leaf disease images of 3 classes include (Healthy,Bacterial Blight,Red Rot) as shown below. Each image is labeled with the corresponding diseases.
![Alt text](https://github.com/shakir1121/Sugarcane/blob/main/EDA_Images/dataset.png?raw=true)
## 3.2. Data Augmentation:
Dataset is very small just 300 images of 3 classes so Data Augmentation methods are used to make new images from the original ones by applying several transformations such as rescaling,rotations,horizontl_flip,vertcal_Flip,zoom_range,shear_range and fill mode (nearest) to increase the diversity of the training data.
### 3.2.1. Dataset Splitting: 
Dataset images is splitting into training and validation.
Training Set: 80%
Validation Set: 20%
## 3.3. CNN:
A Convolutional Neural Network (CNN) is algorithm of Deep Learning that is mostly Used for image Classification tasks. It is made up of several layers, containing convolutional layers, max pooling layers, and fully connected layers, Dropout etc.
The Convolutional layers, where filters are applied to input images to extract features such as textures, edges, and shapes. The Convolutional layers output passed through pooling layers, which are used to down-sample the feature maps,spatial dimension are reducing however holding the most significant information. The pooling layers output is passed through one or more fully connected layers, which are used to classify the images.Architecture are given in above code.
## 3.4. Transfer Learning:
Transfer learning in machine learning is a technique where a pre-trained model, developing for a exact task, is repurposed for another but related task. In its place of training a model from scratch, transfer learning used the knowledge gained from one task to improve the performance on another task.Used 3 pretrained models.
### 3.4.1. Pretrained Model Selection:
I have implement different pretrained models with different training testing ratios to select the best model.checked different hyperparameter (epochs,batch size,learning rate) etc but select 3 models which achieve good accuracy.such as InceptionV3,MobileNetV2,DenseNet121.
### 3.4.2. DenseNet121:
DenseNet121 is a (CNN) architecture well-known for its dense connectivity pattern, introduced in 2016. Developed by researchers at Facebook AI Research (FAIR), DenseNet facilitates feature reuse by connecting each layer to every subsequent layer, promoting efficient information flow and parameter sharing. This architecture mitigates vanishing Gradient issues and enhances model training. DenseNet121 is widely used for image classification tasks.
### 3.4.3. InceptionV3:
It is a deep learning model developed by Google that belongs to the Inception family of convolutional neural networks (CNNs). Introduced in 2015, InceptionV3 is renowned for its efficiency and accuracy in image classification tasks.
### 3.4.4. MobileNetV2:
It is a deep learning lightweight model designed for mobile and edge devices, introduced by Google in 2018. It builds upon the original MobileNet with improvements in both efficiency and accuracy.
## 3.5. Proposed Ensemble Model:
Ensemble model are used to combined predictions from different base models to increasing accuracy and descreasing overfitting.In this Project, an ensemble model architecture as shown in below figure, has been proposed, total 4 models which three pre-trained models and one CNN model.
![Alt text](https://github.com/shakir1121/Sugarcane/blob/main/EDA_Images/proposed_model.PNG?raw=true)
### 3.5.1. Weighted Average Ensemble:
A weighted average ensemble in which the performance of the model depend on the given weight of model.The extremely-performance model will get higher weights as compared to low-performing model. 
## 3.6. Experimental Setting:
The suggested ensemble model is evaluated in terms of precision,accuracy, f1 score and precision.The model was firstly trained by pre-trained models such as Custom CNN, DenseNet121,InceptionV3 and MobileNetV2. The each model hyperparameter shown in  below Table.
![Alt text](https://github.com/shakir1121/Sugarcane/blob/main/EDA_Images/parameter_each_model.PNG?raw=true)
### 3.6.1. Accuracy of Each Model:
Accuracy of each model given in below table.
![Alt text](https://github.com/shakir1121/Sugarcane/blob/main/EDA_Images/accuracy_of_each.PNG?raw=true)







