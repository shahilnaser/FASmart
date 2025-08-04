# import joblib
# import numpy as np
# import pandas as pd
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Load model, scaler, and encoders
# model = joblib.load("crop_yield_model.pkl")
# scaler = joblib.load("scaler.pkl")

# # Load encoders correctly
# encoders = joblib.load("encoder.pkl")
# if not isinstance(encoders, dict):
#     raise TypeError("encoder.pkl should be a dictionary of LabelEncoders.")

# FEATURE_COLUMNS = ["Crop", "Crop_Year", "Season", "State", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]

# @app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.json

#         # Check for missing fields
#         missing_fields = [col for col in FEATURE_COLUMNS if col not in data]
#         if missing_fields:
#             return jsonify({"error": f"Missing values for {', '.join(missing_fields)}"}), 400

#         # Normalize categorical values
#         categorical_cols = ["Crop", "Season", "State"]
#         for col in categorical_cols:
#             data[col] = data[col].strip().title()

#             if col not in encoders:
#                 return jsonify({"error": f"Encoder for {col} not found"}), 500

#             if data[col] not in encoders[col].classes_:
#                 return jsonify({"error": f"Unknown value for {col}: {data[col]}"}), 400

#             data[col] = int(encoders[col].transform([data[col]])[0])

#         # Convert numerical values safely
#         numerical_cols = ["Crop_Year", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]
#         for col in numerical_cols:
#             try:
#                 data[col] = float(data[col])  
#             except ValueError:
#                 return jsonify({"error": f"Invalid number format in {col}"}), 400

#         # Prepare input in correct order
#         features = np.array([data[col] for col in FEATURE_COLUMNS]).reshape(1, -1)

#         # Scale features
#         features_scaled = scaler.transform(features)

#         # Get prediction
#         prediction = model.predict(features_scaled)[0]

#         return jsonify({"predicted_yield": round(prediction, 2)})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)



import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model, scaler, and encoders
model = joblib.load("crop_yield_model.pkl")
scaler = joblib.load("scaler.pkl")
encoders = joblib.load("encoder.pkl")

# Ensure encoders are a dictionary
if not isinstance(encoders, dict):
    raise TypeError("encoder.pkl should be a dictionary of LabelEncoders.")

# Define feature columns in the same order as training
FEATURE_COLUMNS = ["Crop", "Crop_Year", "Season", "State", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Check for missing fields
        missing_fields = [col for col in FEATURE_COLUMNS if col not in data]
        if missing_fields:
            return jsonify({"error": f"Missing values for {', '.join(missing_fields)}"}), 400

        # Normalize categorical values
        categorical_cols = ["Crop", "Season", "State"]
        for col in categorical_cols:
            data[col] = data[col].strip().title()

            if col not in encoders:
                return jsonify({"error": f"Encoder for {col} not found"}), 500

            if data[col] not in encoders[col].classes_:
                return jsonify({"error": f"Unknown value for {col}: {data[col]}"}), 400

            data[col] = int(encoders[col].transform([data[col]])[0])

        # Convert numerical values safely
        numerical_cols = ["Crop_Year", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]
        for col in numerical_cols:
            try:
                data[col] = float(data[col])  
            except ValueError:
                return jsonify({"error": f"Invalid number format in {col}"}), 400

        # Prepare input with correct feature order
        features_df = pd.DataFrame([data], columns=FEATURE_COLUMNS)

        # Scale features
        features_scaled = scaler.transform(features_df)

        # Get prediction
        prediction = model.predict(features_scaled)[0]

        return jsonify({"predicted_yield": round(prediction, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
