import { AutocompleteStyles } from "../ui-styles/styles";
export default ({ chip: { img, title, href }, menuItems }) => (
  <>
    <div class="form-autocomplete">
      <div class="form-autocomplete-input form-input">
        {chip && (
          <div class="chip">
            <img src={img} class="avatar avatar-sm" alt={title} />
            {title}
            <a
              href={href}
              class="btn btn-clear"
              aria-label="Close"
              role="button"
            ></a>
          </div>
        )}
        <input class="form-input" type="text" placeholder="typing here" />
      </div>

      <ul class="menu">
        {menuItems.map(({ href, titleIcon, titleContent }) => (
          <li class="menu-item">
            <a href={href}>
              <div class="tile tile-centered">
                <div class="tile-icon">{titleIcon}</div>
                <div class="tile-content">{titleContent}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);
