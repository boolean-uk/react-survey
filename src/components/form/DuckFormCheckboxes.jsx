export default function DuckFormCheckBoxes() {
  return (
    <ul>
      <li>
        <label>
          <input name="spendTime" type="checkbox" value="swimming" />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spendTime" type="checkbox" value="bathing" />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spendTime" type="checkbox" value="chatting" />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spendTime" type="checkbox" value="noTime" />I don't like
          to spend time with it
        </label>
      </li>
    </ul>
  );
}
