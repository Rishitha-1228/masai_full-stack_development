from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, confusion_matrix
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Sample features
features = ['income', 'credit_utilization', 'missed_payments', 'credit_score']
df = pd.read_csv('credit_data.csv')
X = df[features]
y = df['delinquent']  # Target: 1 or 0

# Split & scale
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier()
model.fit(X_train_scaled, y_train)

# Predict & evaluate
y_pred = model.predict(X_test_scaled)
print("AUC:", roc_auc_score(y_test, model.predict_proba(X_test_scaled)[:, 1]))
print("Confusion Matrix:", confusion_matrix(y_test, y_pred))