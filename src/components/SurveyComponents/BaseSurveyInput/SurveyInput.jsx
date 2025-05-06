export const SurveyInput = ({ value, onChange, onFocus, placeholder, error, helperText, inputProps, label }) => {
  return (
    <div className='survey-input'>
      <div className={`input-wrapper ${error ? "error" : ""}`}>
        <input
          type='number'
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          {...inputProps}
        />

        {label && <span className='input-label'>{label}</span>}
      </div>

      <div className='error-message'>{helperText}</div>
    </div>
  );
};
