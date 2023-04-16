// import PropTypes from 'prop-types';

export function Section({ children }) {
    return (
        <section>         
            <div>{children}</div>              
        </section>
    );
};

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
//     // children: PropTypes.node.isRequired,

// }