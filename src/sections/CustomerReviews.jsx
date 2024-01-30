import { reviews } from "../constants";
import { ReviewComponent } from "../components/ReviewComponent";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-panlanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red "> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied costumers about their
        exceptional experiences with us.{" "}
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-cetner max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewComponent
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
