const component: React.FC<ComponentProps> = () => {
    const { user } = useAppSelector((state) => state.auth);
    const periods = getPeriodNames();
  
    const [selectedPeriod, setSelectedPeriod] = React.useState(periods[0]);
    const [records, setRecords] = React.useState([]);
    const [columns, setColumns] = React.useState<any>();
  
    React.useEffect(() => {
      const [request] = React.useState<Request>({ // Throwing error:  React Hook "React.useState" cannot be called inside a callback.
        requester: user.alias,
        accountingMonth: selectedPeriod,
        limit: 300,
      });
      const { data, error, isLoading, isSuccess, isError } =
        useQuery(request); // Throwing error : React Hook "useQuery" cannot be called inside a callback.
      setRecords(data?.value);
    }, [selectedPeriod, user.alias]);
  
    const onPeriodSelect = (detail: SelectProps.ChangeDetail) => {
      setSelectedPeriod(selectedOption);
    };
  
    React.useEffect(() => {
      if (records) {
        // do something
      }
    }, [records]);
  
    return (
      <>
        <Select
          selectedOption={selectedPeriod}
          onChange={({ detail }) => onPeriodSelect(detail)}
          options={periods}
          selectedAriaLabel="Selected"
        />
      </>
    );
  };