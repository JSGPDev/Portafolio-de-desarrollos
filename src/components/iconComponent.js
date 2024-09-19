import PropTypes from 'prop-types';

const IconComponent = ({ icon, position, size, linkRedirect }) => {

    const containerClassName = `${size} ${position}`

    return (
        <div className={containerClassName}>
            {linkRedirect ? (
                <a href={linkRedirect} target='_blank'><span className={icon}></span></a>
            ) : (
                <span className={icon}></span>
            )}
        </div>
    );
};

// Definir los tipos de las props
IconComponent.propTypes = {
    icon: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    linkRedirect: PropTypes.string,
};

export default IconComponent;