

// eslint-disable-next-line react/prop-types
const NewCard = ({newCardInfo}) => {

    const {id, category,img,title,description,price,cardColorBg,categoryBg,textColors} = newCardInfo || {}

    return (
        <div>
            <h1>Hello Got it</h1>
        </div>
    );
};

export default NewCard;