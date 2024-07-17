import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IMG_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const img_def = "https://argusmsk.ru/a/100-000-no-image-available-vector-images-depositphotos-kk-4rv123iq";

const MovieCard = ({ movie }) => {
    const { poster_path, title, id, release_date } = movie; 

    const navigate = useNavigate();

    const handleClick = () => { 
        navigate(`/movie/${id}`);
    };

    return (
        <Card sx={{ minWidth: '225px', marginRight: '10px' }} onClick={handleClick}>
            <CardMedia
                component="img"
                height="300px"
                image={poster_path ? `${IMG_URL}${poster_path}` : img_def} 
                alt={title}
            />
            <CardContent sx={{ height: '100px' }}>
                <Typography variant="h6" component="p">
                    {title.length > 30 ? `${title.slice(0, 30)}...` : title} 
                </Typography>
                <Typography variant="body2" component="p">
                    {release_date ? `(${release_date.slice(0, 4)})` : '(N/A)'} 
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
