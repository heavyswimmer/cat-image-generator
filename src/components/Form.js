import React from 'react';
import includesHangul from '../utils/checkHangul';

const Form = ({ updateMainCat }) => {
	const [value, setValue] = React.useState('');
	const [errorMessage, setErrorMessage] = React.useState('');

	function handleInputChange(e) {
		const userValue = e.target.value;
		setErrorMessage('');
		if (includesHangul(userValue)) {
			setErrorMessage('한글은 입력하실 수 없습니다.');
		}
		setValue(userValue.toUpperCase());
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		setErrorMessage('');
		if (value === '') {
			setErrorMessage('대사가 입력되지 않았습니다.');
			return;
		}
		updateMainCat(value);
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				name="name"
				placeholder="영어 대사를 입력해주세요"
				value={value}
				onChange={handleInputChange}
			/>
			<button type="submit">생성</button>
			<p style={{ color: 'red' }}>{errorMessage}</p>
		</form>
	);
};

export default Form;
