FROM python:3.9-slim
RUN apt-get update && apt-get install -y build-essential
COPY requirements.txt .
RUN pip install -r requirements.txt
WORKDIR /app
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

