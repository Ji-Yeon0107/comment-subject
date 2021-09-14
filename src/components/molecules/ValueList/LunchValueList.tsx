import React from 'react'


type LunchValueListProps = {
    name: string;
    isSelected: boolean;
    value?: string;
    valueList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
};

function LunchValueList  ({
    name,
    isSelected,
    value,
    valueList,
    setValueList,
    loading,
    setLoading,
    Ref,
    imgURLObj,
}: LunchValueListProps) {
    
    
    return (
        <div>
            <Profile 
                src={} 
                alt={}
                isSelecte={isSelected}>
            </Profile>
            <Text></Text>

        </div>
    )
};
export default LunchValueList;