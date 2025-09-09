FROM python:3.9-slim
RUN apt-get update && apt-get install -y build-essential
RUN pip install flask redis flask-session
WORKDIR /app
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

