# import pandas as pd
# import joblib
# from sklearn.preprocessing import LabelEncoder, StandardScaler
# from sklearn.ensemble import RandomForestRegressor

# # Load dataset
# df = pd.read_csv("crop_yield_data.csv")

# # Define categorical columns
# categorical_cols = ["Crop", "Season", "State"]
# encoders = {}

# # Encode categorical columns and save their categories
# for col in categorical_cols:
#     encoders[col] = LabelEncoder()
#     df[col] = df[col].str.strip().str.title()  # Fix case issues
#     df[col] = encoders[col].fit_transform(df[col])

# # Save LabelEncoders
# joblib.dump(encoders, "encoder.pkl")

# # Prepare feature set
# FEATURE_COLUMNS = ["Crop", "Crop_Year", "Season", "State", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]
# X = df[FEATURE_COLUMNS]
# y = df["Yield"]

# # Standardize features
# scaler = StandardScaler()
# X_scaled = scaler.fit_transform(X)

# # Train model
# model = RandomForestRegressor(n_estimators=100, random_state=42)
# model.fit(X_scaled, y)

# # Save model & scaler
# joblib.dump(model, "crop_yield_model.pkl")
# joblib.dump(scaler, "scaler.pkl")

import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestRegressor

# Load dataset
df = pd.read_csv("crop_yield_data.csv")

# Define categorical columns
categorical_cols = ["Crop", "Season", "State"]
encoders = {}

# Encode categorical columns
for col in categorical_cols:
    df[col] = df[col].str.strip().title()  # Fix inconsistent formatting
    encoders[col] = LabelEncoder()
    df[col] = encoders[col].fit_transform(df[col])

# Save LabelEncoders
joblib.dump(encoders, "encoder.pkl")

# Define feature columns (order is important)
FEATURE_COLUMNS = ["Crop", "Crop_Year", "Season", "State", "Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"]

# Prepare X and y
X = df[FEATURE_COLUMNS]
y = df["Yield"]

# Train StandardScaler **with feature names**
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
scaler.feature_names_in_ = FEATURE_COLUMNS  # Store feature names for validation

# Train model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_scaled, y)

# Save model & scaler
joblib.dump(model, "crop_yield_model.pkl")
joblib.dump(scaler, "scaler.pkl")

print("✅ Model and Scaler trained successfully!")
