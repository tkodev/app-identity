import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

// set up jest-axe expect methods
expect.extend(toHaveNoViolations);
