import styled from 'styled-components';

const WithURL = styled.div(['\n  background: url(\'https://foo.com/images/bar.png\') no-repeat center center;\n']);

const WithURLNested = styled(WithURL)(['\n  background: url(\'https://foo.com/images/baz.png\') no-repeat center center;\n']);