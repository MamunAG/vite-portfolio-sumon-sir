export default function HappyClientCard() {
  return (
    <div className="" style={{ width: 283.333, marginRight: 40 }}>
      <div className=" rounded-md">
        <blockquote className="rounded-md w-full p-2">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
          <div className="bubble">
            <svg
              width="49px"
              height="36px"
              viewBox="0 0 49 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <polygon
                  id="Path"
                  fill="#FFFFFF"
                  points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                ></polygon>
              </g>
            </svg>
          </div>
        </blockquote>
        <div className="author flex items-center pt-3">
          <div className="pic" style={{ width: 50 }}>
            <img
              src="images/person_2.jpg"
              alt="Image"
              style={{ maxWidth: 50 }}
            />
          </div>
          <div className="text">
            <p>
              <strong
                className="font-bold text-primary"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Carl Anderson
              </strong>
            </p>
            <span className="text-black">CEO, Co-Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
