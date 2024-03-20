class EmailRegex {
  static regexEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$"
  )

  static regexPassword  = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
  )
}
export default EmailRegex;
