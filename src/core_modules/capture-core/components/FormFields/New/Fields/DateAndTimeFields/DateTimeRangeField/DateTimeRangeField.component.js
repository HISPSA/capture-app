// @flow
import * as React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { DateTimeRangeField as UIDateTimeRangeField } from 'capture-ui';
import { systemSettingsStore } from '../../../../../../metaDataMemoryStores';

const getStyles = (theme: Theme) => ({
    innerInputError: {
        color: theme.palette.error.main,
        padding: theme.typography.pxToRem(3),
        fontSize: theme.typography.pxToRem(12),
    },
    innerInputWarning: {
        color: theme.palette.warning.dark,
        padding: theme.typography.pxToRem(3),
        fontSize: theme.typography.pxToRem(12),
    },
    innerInputInfo: {
        color: 'green',
        padding: theme.typography.pxToRem(3),
        fontSize: theme.typography.pxToRem(12),
    },
    innerInputValidating: {
        color: 'orange',
        padding: theme.typography.pxToRem(3),
        fontSize: theme.typography.pxToRem(12),
    },
});

type Props = {
    theme: Object,
}

class DateTimeRangeFieldPlain extends React.Component<Props> {
    render() {
        const { ...passOnProps } = this.props;
        return (
            <UIDateTimeRangeField
                {...passOnProps}
                locale={systemSettingsStore.get().uiLocale}
            />
        );
    }
}

export const DateTimeRangeField = withTheme()(withStyles(getStyles)(DateTimeRangeFieldPlain));
