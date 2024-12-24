import Figure from 'react-bootstrap/Figure';
const Oursersemi = ({ image, title, content }) => {

  return (
    <Figure className=" gap-4 justify-content-evenly mt-5  flex-lg-row flex-column justify-content-between align-items-center">
      <div className="card" >
      <style type="width: 30rem;"></style>
            <img src={image} alt={title} className="card-img-top" height="300px" width="50px" />

            <div className="card-body px-5">
                  <a href="" className="text-decoration-none text-dark"><h5>{title}</h5></a>  
                  <p className="card-text">{content}</p>
                </div>
          </div>
    </Figure>
  );
};
export default Oursersemi;
