document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-post-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const postTitle = document.getElementById('post-title').value;
        const postImage = document.getElementById('post-image').value;
        const postTag = document.getElementById('post-tag').value;
        const postAuthor = document.getElementById('post-author').value;
        const postDescription = document.getElementById('post-description').value;

        const postData = {
            title: postTitle,
            image: postImage,
            tag: postTag,
            author: postAuthor,
            description: postDescription
        };

        
        const token = localStorage.getItem('token'); 

        try {
            const response = await fetch('https://blog-post-production-b61c.up.railway.app/api/v1/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Post created:', result);

            alert('Post created successfully!');
         
        } catch (error) {
            console.error('There was a problem with the post creation:', error);
            alert('Failed to create post. Please try again.');
        }
    });
});
