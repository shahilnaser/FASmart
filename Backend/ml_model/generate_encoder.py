import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

# Load dataset
df = pd.read_csv("crop_yield_data.csv")

# Define categorical columns
categorical_cols = ["Crop", "Season", "State"]

# Create label encoders
encoders = {}
for col in categorical_cols:
    df[col] = df[col].str.strip()  # Remove unwanted spaces
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le

# Save encoders
joblib.dump(encoders, "encoder.pkl")
print("✅ encoder.pkl has been successfully saved!")
