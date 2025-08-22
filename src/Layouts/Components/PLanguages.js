import React from "react";

export const PLanguages = () => {
  return (
    <div className="languagesItem">
      <table class="table">
        <caption>Programming Languages</caption>
        <thead>
          <tr>
            <th scope="col">
              <img
                src="webdesign.png"
                alt="web designing"
                className="langIcon"
              />
            </th>
            <th scope="col" className="ratings">
              Languages
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="javascript.png" alt="javascript" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="java.webp" alt="java" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="react.png" alt="react" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="mysql.png" alt="mysql" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        I used to teach <span>english</span> but I found out I could{" "}
        <span>create</span> most exciting <span>things</span> with some of them.
      </p>
    </div>
  );
};
