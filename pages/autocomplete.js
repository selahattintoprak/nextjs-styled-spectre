export default () => (
  <>
    <div class="form-group">
      <div class="form-autocomplete">
        <div class="form-autocomplete-input form-input">
          <span class="chip">Bruce Banner</span>
          <div class="chip">
            <img
              class="avatar avatar-sm"
              src="../img/avatar-1.png"
              alt="Avatar"
            />
            Thor Odinson
          </div>
          <div class="chip">
            <img
              class="avatar avatar-sm"
              src="../img/avatar-4.png"
              alt="Avatar"
            />
            Steve Rogers
          </div>
          <div class="chip">
            <figure
              class="avatar avatar-sm"
              data-initial="TS"
              style="background-color: #5755d9;"
            ></figure>
            Tony Stark
          </div>
          <span class="chip active">Natasha Romanoff</span>
          <input class="form-input" type="text" placeholder="" />
        </div>
      </div>
    </div>
  </>
);
