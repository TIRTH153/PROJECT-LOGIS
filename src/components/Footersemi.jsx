const Footersemi = ({ image }) => {
    return (
        <div className="mt-5 d-flex justify-content-start align-items-start gap-3">
        <div className="bg-gray-900 border border-white px-2 py-2 rounded-circle">
          <img alt="social-media" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="ti1" src={image}/>
        </div>
        </div>
        
    );
};
export default Footersemi;