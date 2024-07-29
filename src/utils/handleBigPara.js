import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const TruncatedText = ({ text, styles }) => {
    const [showFullText, setShowFullText] = useState(false);

    const truncateString = (str) => {
        if (str.length <= 200) return str;
        return str.slice(0, 200);
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => setShowFullText(!showFullText)}>
            <Text style={styles}>
                {showFullText ?
                    text
                    :
                    truncateString(text)
                }
                {!showFullText && text.length > 200 && (
                    <Text style={{ color: 'blue' }}>  ...more</Text>
                )}
            </Text>
        </TouchableOpacity>
    );
}