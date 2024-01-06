

export function Sections() {
  const url = '127.0.0.1:3306'
  return (
    <>
      <body>
        <div>
          <h1>Performance Evaluation Form</h1>
          <h1>(Exempt Staff)- E1 to E5</h1>
        </div>
        <div>
          <form method="post" action='127.0.0.1:3306'></form> 
          <fieldset>
            <label for="name">
              Name of Appraisee
              <input name="name" id="name" type="text" required></input>
            </label>
            <label for="phone-number">
              Appraisee's Emp No.
              <input
                name="phone-number"
                id="phone-number"
                type="text"
                required
              ></input>
            </label>
            <label for="role">
              Designation
              <input name="role" id="role" type="text" required></input>
            </label>
            <label for="grade">
              Job Grade
              <input name="Grade" id="Grade" type="text" required></input>
            </label>
            <label for="department">
              Department
              <input
                name="department"
                id="department"
                type="text"
                required
              ></input>
            </label>
            <label for="Date joined">
              Date Joined
              <input required></input>
            </label>
            <label for="review period">
              Appraisal Review Period
              <input required></input>
            </label>
            <label for="rating">
              Performance Rating
              <input required></input>
            </label>
            <label for="conducted-by">
              Appraisal Conducted By
              <input required></input>
            </label>
            <label for="Designation">
              Designation
              <input required></input>
            </label>
          </fieldset>
        </div>
      </body>
    </>
  );
}
