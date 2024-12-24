const Aboutsemi = ({image, title, content}) => {
  return (
    <div className="flex-md-row flex-column  mt-5 justify-content-evenly gap-5">
      <div>
        <div className="gap-4 mt-4 justify-content-evenly">
          <img src={image} height="50px" width="50px" />

          <article>
            <h5>{title}</h5>
            <p>{content}</p>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Aboutsemi;
