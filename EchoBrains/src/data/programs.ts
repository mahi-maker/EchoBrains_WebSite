export interface Program {
  id: string;
  title: string;
  description: string;
  category: 'java' | 'python' | 'embedded' | 'data-science';
  code: string;
  downloadUrl: string;
}

export const programs: Program[] = [
  {
    id: '1',
    title: 'Banking Management System',
    description: 'Complete banking application with account management, transactions, and reporting features.',
    category: 'java',
    code: `public class BankAccount {
    private String accountNumber;
    private double balance;
    private String holderName;
    
    public BankAccount(String accountNumber, String holderName) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = 0.0;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        return false;
    }
    
    public double getBalance() {
        return balance;
    }
}`,
    downloadUrl: '/downloads/banking-system.zip'
  },
  {
    id: '2',
    title: 'E-commerce REST API',
    description: 'RESTful API for e-commerce platform with product management, user authentication, and order processing.',
    category: 'java',
    code: `@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAll();
        return ResponseEntity.ok(products);
    }
    
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        Product product = productService.findById(id);
        return product != null ? ResponseEntity.ok(product) : ResponseEntity.notFound().build();
    }
}`,
    downloadUrl: '/downloads/ecommerce-api.zip'
  },
  {
    id: '3',
    title: 'Django Blog Application',
    description: 'Full-featured blog application with user authentication, comments, and admin panel.',
    category: 'python',
    code: `from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=[('draft', 'Draft'), ('published', 'Published')])
    
    class Meta:
        ordering = ['-created_date']
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('post_detail', kwargs={'slug': self.slug})`,
    downloadUrl: '/downloads/django-blog.zip'
  },
  {
    id: '4',
    title: 'Flask API with Authentication',
    description: 'RESTful API built with Flask featuring JWT authentication and database integration.',
    category: 'python',
    code: `from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
jwt = JWTManager(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    hashed_password = generate_password_hash(password)
    # Save user to database
    
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    # Verify user credentials
    if verify_user(username, password):
        access_token = create_access_token(identity=username)
        return jsonify({'access_token': access_token})
    
    return jsonify({'message': 'Invalid credentials'}), 401`,
    downloadUrl: '/downloads/flask-auth-api.zip'
  },
  {
    id: '5',
    title: 'IoT Temperature Monitor',
    description: 'Arduino-based temperature monitoring system with WiFi connectivity and data logging.',
    category: 'embedded',
    code: `#include <WiFi.h>
#include <DHT.h>
#include <HTTPClient.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
const char* ssid = "your_wifi_ssid";
const char* password = "your_wifi_password";
const char* serverURL = "http://your-server.com/api/temperature";

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  if (!isnan(temperature) && !isnan(humidity)) {
    sendData(temperature, humidity);
  }
  
  delay(30000); // Send data every 30 seconds
}

void sendData(float temp, float hum) {
  HTTPClient http;
  http.begin(serverURL);
  http.addHeader("Content-Type", "application/json");
  
  String payload = "{\\"temperature\\":" + String(temp) + ",\\"humidity\\":" + String(hum) + "}";
  int httpResponseCode = http.POST(payload);
  
  if (httpResponseCode > 0) {
    Serial.println("Data sent successfully");
  }
  
  http.end();
}`,
    downloadUrl: '/downloads/iot-temperature-monitor.zip'
  },
  {
    id: '6',
    title: 'Smart Home Automation',
    description: 'Raspberry Pi-based home automation system with sensor integration and mobile app control.',
    category: 'embedded',
    code: `import RPi.GPIO as GPIO
import time
import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# GPIO pins
LED_PIN = 18
MOTION_SENSOR_PIN = 24
RELAY_PIN = 23

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(MOTION_SENSOR_PIN, GPIO.IN)
GPIO.setup(RELAY_PIN, GPIO.OUT)

class SmartHome:
    def __init__(self):
        self.devices = {
            'lights': False,
            'fan': False,
            'security': True
        }
    
    def toggle_light(self):
        self.devices['lights'] = not self.devices['lights']
        GPIO.output(LED_PIN, self.devices['lights'])
        return self.devices['lights']
    
    def toggle_fan(self):
        self.devices['fan'] = not self.devices['fan']
        GPIO.output(RELAY_PIN, self.devices['fan'])
        return self.devices['fan']
    
    def check_motion(self):
        return GPIO.input(MOTION_SENSOR_PIN)

smart_home = SmartHome()

@app.route('/api/devices', methods=['GET'])
def get_devices():
    return jsonify(smart_home.devices)

@app.route('/api/toggle/<device>', methods=['POST'])
def toggle_device(device):
    if device == 'lights':
        status = smart_home.toggle_light()
    elif device == 'fan':
        status = smart_home.toggle_fan()
    else:
        return jsonify({'error': 'Device not found'}), 404
    
    return jsonify({device: status})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)`,
    downloadUrl: '/downloads/smart-home-automation.zip'
  },
  {
    id: '7',
    title: 'Sales Data Analysis',
    description: 'Python data analysis project using pandas and matplotlib for sales insights and visualization.',
    category: 'data-science',
    code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

class SalesAnalyzer:
    def __init__(self, data_file):
        self.df = pd.read_csv(data_file)
        self.prepare_data()
    
    def prepare_data(self):
        self.df['Date'] = pd.to_datetime(self.df['Date'])
        self.df['Month'] = self.df['Date'].dt.month
        self.df['Year'] = self.df['Date'].dt.year
    
    def monthly_sales_trend(self):
        monthly_sales = self.df.groupby(['Year', 'Month'])['Revenue'].sum().reset_index()
        
        plt.figure(figsize=(12, 6))
        plt.plot(monthly_sales.index, monthly_sales['Revenue'], marker='o')
        plt.title('Monthly Sales Trend')
        plt.xlabel('Month')
        plt.ylabel('Revenue ($)')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.show()
    
    def top_products(self, n=10):
        top_products = self.df.groupby('Product')['Revenue'].sum().sort_values(ascending=False).head(n)
        
        plt.figure(figsize=(10, 8))
        top_products.plot(kind='barh')
        plt.title(f'Top {n} Products by Revenue')
        plt.xlabel('Revenue ($)')
        plt.tight_layout()
        plt.show()
        
        return top_products
    
    def customer_segmentation(self):
        customer_stats = self.df.groupby('Customer_ID').agg({
            'Revenue': ['sum', 'count', 'mean']
        }).round(2)
        
        customer_stats.columns = ['Total_Revenue', 'Purchase_Count', 'Avg_Order_Value']
        
        # Simple RFM-style segmentation
        customer_stats['Segment'] = 'Regular'
        customer_stats.loc[customer_stats['Total_Revenue'] > customer_stats['Total_Revenue'].quantile(0.8), 'Segment'] = 'High Value'
        customer_stats.loc[customer_stats['Purchase_Count'] > customer_stats['Purchase_Count'].quantile(0.8), 'Segment'] = 'Frequent'
        
        return customer_stats

# Usage
analyzer = SalesAnalyzer('sales_data.csv')
analyzer.monthly_sales_trend()
top_products = analyzer.top_products()
customer_segments = analyzer.customer_segmentation()`,
    downloadUrl: '/downloads/sales-data-analysis.zip'
  },
  {
    id: '8',
    title: 'Machine Learning Classifier',
    description: 'Customer churn prediction model using scikit-learn with feature engineering and model evaluation.',
    category: 'data-science',
    code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler, LabelEncoder
import joblib

class ChurnPredictor:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.label_encoders = {}
    
    def prepare_features(self, df):
        # Feature engineering
        df['tenure_months'] = df['tenure']
        df['total_charges_per_month'] = df['TotalCharges'] / df['tenure'].replace(0, 1)
        df['avg_monthly_charges'] = df['MonthlyCharges']
        
        # Encode categorical variables
        categorical_columns = ['gender', 'Partner', 'Dependents', 'PhoneService', 
                             'MultipleLines', 'InternetService', 'OnlineSecurity']
        
        for col in categorical_columns:
            if col not in self.label_encoders:
                self.label_encoders[col] = LabelEncoder()
                df[col] = self.label_encoders[col].fit_transform(df[col])
            else:
                df[col] = self.label_encoders[col].transform(df[col])
        
        return df
    
    def train(self, df, target_column='Churn'):
        # Prepare features
        df = self.prepare_features(df.copy())
        
        # Separate features and target
        X = df.drop([target_column], axis=1)
        y = df[target_column]
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train model
        self.model.fit(X_train_scaled, y_train)
        
        # Evaluate
        y_pred = self.model.predict(X_test_scaled)
        print("Classification Report:")
        print(classification_report(y_test, y_pred))
        
        return self.model.score(X_test_scaled, y_test)
    
    def predict_churn(self, customer_data):
        customer_df = pd.DataFrame([customer_data])
        customer_df = self.prepare_features(customer_df)
        customer_scaled = self.scaler.transform(customer_df)
        
        prediction = self.model.predict(customer_scaled)[0]
        probability = self.model.predict_proba(customer_scaled)[0]
        
        return {
            'churn_prediction': prediction,
            'churn_probability': probability[1],
            'retention_probability': probability[0]
        }
    
    def save_model(self, filepath):
        joblib.dump({
            'model': self.model,
            'scaler': self.scaler,
            'label_encoders': self.label_encoders
        }, filepath)

# Usage example
predictor = ChurnPredictor()
df = pd.read_csv('customer_data.csv')
accuracy = predictor.train(df)
print(f"Model Accuracy: {accuracy:.2f}")

# Predict for new customer
new_customer = {
    'gender': 'Male',
    'tenure': 12,
    'MonthlyCharges': 65.0,
    'TotalCharges': 780.0,
    'Partner': 'Yes',
    'Dependents': 'No'
}
result = predictor.predict_churn(new_customer)
print(f"Churn Probability: {result['churn_probability']:.2f}")`,
    downloadUrl: '/downloads/churn-prediction-model.zip'
  }
];

export const programsByCategory = {
  java: programs.filter(p => p.category === 'java'),
  python: programs.filter(p => p.category === 'python'),
  embedded: programs.filter(p => p.category === 'embedded'),
  'data-science': programs.filter(p => p.category === 'data-science')
};