import PropTypes from 'prop-types';

const Sidebar = (props) => {
    console.log(PropTypes)
    const { baColor, width } = props;

    return (
        <ul style={{ background: baColor, width }}>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
            <li>ddd</li>
        </ul>
    )
}
Sidebar.propTypes = {
    baColor: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // 多種屬性類型
}

export default Sidebar