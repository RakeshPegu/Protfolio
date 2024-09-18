import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './homePage.scss';
import apiRequest from '../../lib/apiRequest';
import ContactPage from '../contact/ContactPage';

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await apiRequest.get('/project/posts');
                setPosts(res.data); // Set the fetched posts to state
            } catch (error) {
                console.log(error);
                setError(error.response?.data?.message || 'An error occurred'); // Set error message
            } finally {
                setIsLoading(false); // Set loading to false once the request is complete
            }
        };

        fetchPosts(); // Call the async function
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div className='homePage'>
            <div className="introInfo">
                <div className="left">
                    <div className="wrapper">
                        <h1>Hello Dear, Welcome to my world</h1>
                        <p>I am a professional Fullstack web developer,</p>
                        <p>I have delivered many projects and I enjoyed doing it.</p>
                        <p>Because I love coding and people are ready to pay me to do what I love, that's great, isn't it?</p>
                    </div>
                </div>
                <div className="right">
                    <div className="imgContainer">
                        <img src='/code.jpg' alt='Coding' />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <h2>My Skills</h2>
                    <ul>
                        <li><a href='https://nodejs.org/docs/latest/api/documentation.html'>Node.js</a></li>
                        <li><a href='https://www.mongodb.com/docs/'>MongoDB</a></li>
                        <li><a href='https://www.prisma.io/docs'>Prisma</a></li>
                        <li><a href='https://react.dev/learn'>React.js</a></li>
                        <li><a href='https://expressjs.com/'>Express.js</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JavaScript</a></li>
                        <li><a href='https://docs.python.org/3/'>Python</a></li>
                    </ul>
                </div>
              
            </div>
            <div id='projects' className="project">
            <h1> Some of my projects</h1>
            <div className="container">
           
               {posts.map(post => (
                            <Card key={post.id} item={post} />
                        ))}
            </div>
            </div>
            
            
          
          
            <div className="footer">
                {/* Footer content here */}
            </div>
        </div>

    );
}

export default HomePage;
