import React from "react";

export const Languages = () => {
  return (
    <div className="languagesItem">
      <p>
        My name is <span>Cristian</span> and I am a person who really likes
        talking and particularly in different languages.
      </p>
      <table class="table">
        <caption>Languages</caption>
        <thead>
          <tr>
            <th scope="col">
              <img src="world.webp" alt="world" className="langIcon" />
            </th>
            <th scope="col" className="ratings">
              Languages
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="spanish.png" alt="spanish" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="english.png" alt="english" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="korean.png" alt="korean" className="langIcon" />
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
              <img src="china.png" alt="china" className="langIcon" />
            </td>
            <td className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
