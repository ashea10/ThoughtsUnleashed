# ThoughtsUnleashed (Medium-Like Blog)

#### Description:

ThoughtsUnleashed is a blogging platform inspired by Medium, designed to provide users with a seamless experience for reading and publishing blog posts. The backend is built using Node.js, while the frontend leverages ReactJS to deliver a dynamic and responsive user interface. ThoughtsUnleashed uses a PostgreSQL database, managed through Prisma as the Object-Relational Mapping (ORM) tool. 

## Main Features
- **User Authentication**: 
  - **Sign Up**: New users can create an account via the `/signup` endpoint.
  - **Sign In**: Returning users can log in through the `/signin` endpoint.
- **Blog Management**:
  - **View Blogs**: Users can view all existing blog posts at the `/blogs` endpoint allowing for easy access/viewing.
  - **Publish Blog**: Users can share their thoughts and publish blog posts using the `/publish` endpoint.

## Usage Examples
1. **Sign Up for a New Account**:
   - Endpoint: `/signup`
   - Method: `POST`
   - Payload:
     ```json
     {
       "username": "your-username",
       "password": "your-password",
       "email": "your-email@example.com"
     }
     ```

2. **Log In with Your Credentials**:
   - Endpoint: `/signin`
   - Method: `POST`
   - Payload:
     ```json
     {
       "username": "your-username",
       "password": "your-password"
     }
     ```

3. **View All Blogs**:
   - Endpoint: `/blogs`
   - Method: `GET`
   - Description: Fetches all existing blog posts.

4. **Publish a New Blog Post**:
   - Endpoint: `/publish`
   - Method: `POST`
   - Payload:
     ```json
     {
       "title": "Your Blog Title",
       "content": "Your blog content goes here..."
     }
     ```


