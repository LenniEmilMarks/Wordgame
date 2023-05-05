const component: React.FC<ComponentProps> = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [request, setRequest] = React.useState<Request | undefined>();
    const periods = getPeriodNames();
    const { data, error, isLoading, isSuccess, isError } =
        useQuery(request); //when component get re-rendered, and request state is there, it will fetch data
  
  
    const [selectedPeriod, setSelectedPeriod] = React.useState(periods[0]);
    const [records, setRecords] = React.useState([]);
    const [columns, setColumns] = React.useState<any>();
  
    //fetched successfully
    React.useEffect(() => {
      if(data) {
         setRecords(data.value);
      }
    }, [data])
  
    React.useEffect(() => {
      setRequest({
        requester: user.alias,
        accountingMonth: selectedPeriod,
        limit: 300,
      })
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