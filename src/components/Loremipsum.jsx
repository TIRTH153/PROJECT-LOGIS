const Loremipsum = ({image,title}) => {
    return (
        <div>
                <div className="d-flex gap-2">
                     <img src={image} alt={title} height="50px" width="50px"/>
                    
                    <article className="ms-2">
                        <h4>{title}</h4>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, doloremque
                            libero molestias iste ab quis.</p>
                        <a href="" className="text-decoration-none">Learn More &rarr;</a>
                    </article>
                </div>
            </div>
    );
  };
  export default Loremipsum;