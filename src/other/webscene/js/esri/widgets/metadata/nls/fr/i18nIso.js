define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "æ_ISO 19115 (Data)______Â",
    		description: ""
    	},
    	service: {
    		caption: "æ_ISO 19119 (Service)_______Â",
    		description: ""
    	},
    	gmi: {
    		caption: "æ_ISO 19115-2 (Imagery and Gridded Data)____________Â",
    		description: ""
    	}
    },
    
    general: {
    	reference: "æ_Reference____Â"
    },
    
    sections: {
    	metadata: "æ_Metadata___Â",
    	identification: "æ_Identification_____Â",
    	distribution: "æ_Distribution_____Â",
    	quality: "æ_Quality___Â",
    	acquisition: "æ_Acquisition____Â"
    },
    
    metadataSection: {
    	identifier: "æ_Identifier____Â",
    	contact: "æ_Contact___Â",
    	date: "æ_Date__Â",
    	standard: "æ_Standard___Â",
    	reference: "æ_Reference____Â"
    },
    
    identificationSection: {
    	citation: "æ_Citation___Â",
    	description: "æ_Description____Â",
    	contact: "æ_Contact___Â",
    	thumbnail: "æ_Thumbnail____Â",
    	keywords: "æ_Keywords___Â",
    	constraints: "æ_Constraints____Â",
    	resource: "æ_Resource___Â",
    	resourceTab: {
    		representation: "æ_Representation_____Â",
    		language: "æ_Language___Â",
    		classification: "æ_Classification_____Â",
    		extent: "æ_Extent___Â"
    	},
    	serviceResourceTab: {
    		serviceType: "æ_Service Type_____Â",
    		extent: "æ_Extent___Â",
    		couplingType: "æ_Coupling Type_____Â",
    		operation: "æ_Operation____Â",
    		operatesOn: "æ_Operates On____Â"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "æ_Scope___Â",
    	conformance: "æ_Conformance____Â",
    	lineage: "æ_Lineage___Â"
    },
    
    acquisitionSection: {
    	requirement: "æ_Requirement____Â",
    	objective: "æ_Objective____Â",
    	instrument: "æ_Instrument____Â",
    	plan: "æ_Plan__Â",
    	operation: "æ_Operation____Â",
    	platform: "æ_Platform___Â",
    	environment: "æ_Environment____Â"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "æ_Abstract___Â",
    	purpose: "æ_Purpose___Â",
    	credit: "æ_Credits___Â",
    	pointOfContact: "æ_Point of Contact______Â",
    	resourceMaintenance: "æ_Maintenance____Â",
    	graphicOverview: "æ_Graphic Overview______Â",
    	descriptiveKeywords: "æ_Keyword Collection______Â",
    	resourceConstraints: "æ_Constraints____Â"
    },
    
    CI_Address: {
    	deliveryPoint: "æ_Delivery Point_____Â",
    	city: "æ_City__Â",
    	administrativeArea: "æ_Administrative Area_______Â",
    	postalCode: "æ_Postal Code____Â",
    	country: "æ_Country___Â",
    	electronicMailAddress: "æ_E-Mail Address_____Â"
    },
    
    CI_Citation: {
    	title: "æ_Title___Â",
    	alternateTitle: "æ_Alternate Title______Â",
    	identifier: "æ_Unique Resource Identifier_________Â",
    	resource: {
    		title: "æ_Resource Title_____Â",
    		date: "æ_Resource Date_____Â"
    	},
    	specification: {
    		title: "æ_Specification Title_______Â",
    		date: "æ_Specification Date______Â"
    	}
    },
    
    CI_Contact: {
    	phone: "æ_Phone___Â",
    	address: "æ_Address___Â",
    	onlineResource: "æ_Online Resource______Â",
    	hoursOfService: "æ_Hours of Service______Â",
    	contactInstructions: "æ_Contact Instructions_______Â"
    },
    
    CI_Date: {
    	date: "æ_Date__Â",
    	dateType: "æ_Date Type____Â"
    },
    
  	CI_DateTypeCode: {
  		caption: "æ_Date Type____Â",
  		creation: "æ_Creation Date_____Â",
  		publication: "æ_Publication Date______Â",
  		revision: "æ_Revision Date_____Â"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "æ_Function___Â",
    	download: "æ_Download___Â",
    	information: "æ_Information____Â",
    	offlineAccess: "æ_Offline Access_____Â",
    	order: "æ_Order___Â",
    	search: "æ_Search___Â"
    },
    
    CI_OnlineResource: {
    	caption: "æ_Online Resource______Â",
    	linkage: "æ_URL__Â",
    	protocol: "æ_Protocol___Â",
    	applicationProfile: "æ_Application Profile_______Â",
    	name: "æ_Name__Â",
    	description: "æ_Description____Â",
    	sFunction: "æ_Function___Â"
    },
    
    CI_ResponsibleParty: {
    	caption: "æ_Point of Contact______Â",
    	individualName: "æ_Individual Name______Â",
    	organisationName: "æ_Organisation Name______Â",
    	positionName: "æ_Position Name_____Â",
    	contactInfo: "æ_Contact Info_____Â",
    	role: "æ_Role__Â"
    },
    
    CI_RoleCode: {
    	caption: "æ_Role__Â",
    	resourceProvider: "æ_Resource Provider______Â",
    	custodian: "æ_Custodian____Â",
    	owner: "æ_Owner___Â",
    	user: "æ_User__Â",
    	distributor: "æ_Distributor____Â",
    	originator: "æ_Originator____Â",
    	pointOfContact: "æ_Point of Contact______Â",
    	principalInvestigator: "æ_Principal Investigator________Â",
    	processor: "æ_Processor____Â",
    	publisher: "æ_Publisher____Â",
    	author: "æ_Author___Â"
    },
    
    CI_Telephone: {
    	voice: "æ_Voice___Â",
    	facsimile: "æ_Fax__Â"
    },
    
    DCPList: {
    	caption: "æ_DCP__Â",
    	XML: "æ_XML__Â",
    	CORBA: "æ_CORBA___Â",
    	JAVA: "æ_JAVA__Â",
    	COM: "æ_COM__Â",
    	SQL: "æ_SQL__Â",
    	WebServices: "æ_WebServices____Â"
    },
    
    DQ_ConformanceResult: {
    	caption: "æ_Conformance Result______Â",
    	explanation: "æ_Explanation____Â",
    	degree: {
    		caption: "æ_Degree___Â",
    		validationPerformed: "æ_Validation Performed_______Â",
    		conformant: "æ_Conformant____Â",
    		nonConformant: "æ_Non Conformant_____Â"
    	}
    },
    
    DQ_DataQuality: {
    	report: "æ_Report___Â"
    },
    
    DQ_Scope : {
    	level: "æ_Scope (quality information applies to)____________Â",
    	levelDescription: "æ_Level Description______Â"
    },
    
    EX_Extent: {
    	caption: "æ_Extent___Â",
    	description: "æ_Description____Â",
    	geographicElement: "æ_Spatial Extent_____Â",
    	temporalElement: "æ_Temporal Extent______Â",
    	verticalElement: "æ_Vertical Extent______Â"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "æ_West Bounding Longitude________Â",
    	eastBoundLongitude: "æ_East Bounding Longitude________Â",
    	southBoundLatitude: "æ_South Bounding Latitude________Â",
    	northBoundLatitude: "æ_North Bounding Latitude________Â"
    },
    
    EX_GeographicDescription: {
    	caption: "æ_Geographic Description________Â"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "æ_Begin Date____Â",
    		endPosition: "æ_End Date___Â"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "æ_Minimum Value_____Â",
    	maximumValue: "æ_Maximum Value_____Â",
    	verticalCRS: "æ_Vertical CRS_____Â"
    },
    
    Length: {
    	caption: "æ_Length___Â",
    	uom: "æ_Units of Measure______Â",
    	km: "æ_Kilometers____Â",
    	m: "æ_Meters___Â",
    	mi: "æ_Miles___Â",
    	ft: "æ_Feet__Â"
    },
    
    LI_Lineage: {
    	statement: "æ_Lineage Statement______Â"
    },
    
    MD_BrowseGraphic: {
    	fileName: "æ_Browse Graphic URL______Â",
    	fileDescription: "æ_Browse Graphic Caption________Â",
    	fileType: "æ_Browse Graphic Type_______Â"
    },
    
    MD_ClassificationCode: {
    	unclassified: "æ_Unclassified_____Â",
    	restricted: "æ_Restricted____Â",
    	confidential: "æ_Confidential_____Â",
    	secret: "æ_Secret___Â",
    	topSecret: "æ_Top Secret____Â"
    },
    
    MD_Constraints: {
    	caption: "æ_Usage Constraints______Â",
    	useLimitation: "æ_Use Limitation_____Â"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "æ_Spatial Representation Type_________Â",
    	spatialResolution: "æ_Spatial Resolution______Â",
    	language: "æ_Resource Language______Â",
    	supplementalInformation: "æ_Supplemental_____Â"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "æ_Online___Â"
    },
    
    MD_Distribution: {
    	distributionFormat: "æ_Distribution Format_______Â",
    	transferOptions: "æ_Transfer Options______Â"
    },
    
    MD_Format: {
    	name: "æ_Format Name____Â",
    	version: "æ_Format Version_____Â"
    },
    
    MD_Identifier: {
    	caption: "æ_URI__Â",
    	identifierCaption: "æ_Identifier____Â",
    	code: "æ_Code__Â"
    },
    
    MD_Keywords: {
    	delimitedCaption: "æ_Keywords___Â",
    	thesaurusName: "æ_Associated Thesaurus_______Â"
    },
    
    MD_KeywordTypeCode: {
    	caption: "æ_Keyword Type_____Â",
    	discipline: "æ_Discipline____Â",
    	place: "æ_Place___Â",
    	stratum: "æ_Stratum___Â",
    	temporal: "æ_Temporal___Â",
    	theme: "æ_Theme___Â"
    },
    
    MD_LegalConstraints: {
    	caption: "æ_Legal Constraints______Â",
    	accessConstraints: "æ_Access Constraints______Â",
    	useConstraints: "æ_Use Constraints______Â",
    	otherConstraints: "æ_Other Constraints______Â"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "æ_Frequency____Â",
    	continual: "æ_Continual____Â",
    	daily: "æ_Daily___Â",
    	weekly: "æ_Weekly___Â",
    	fortnightly: "æ_Fortnightly____Â",
    	monthly: "æ_Monthly___Â",
    	quarterly: "æ_Quarterly____Â",
    	biannually: "æ_Biannually____Â",
    	annually: "æ_Annually___Â",
    	asNeeded: "æ_As Needed____Â",
    	irregular: "æ_Irregular____Â",
    	notPlanned: "æ_Not Planned____Â",
    	unknown: "æ_Unknown___Â"
    },
    
    MD_Metadata: {
    	caption: "æ_Metadata___Â",
    	fileIdentifier: "æ_File Identifier______Â",
    	language: "æ_Metadata Language______Â",
    	hierarchyLevel: "æ_Hierarchy Level______Â",
    	hierarchyLevelName: "æ_Hierarchy Level Name_______Â",
    	contact: "æ_Metadata Contact______Â",
    	dateStamp: "æ_Metadata Date_____Â",
    	metadataStandardName: "æ_Metadata Standard Name________Â",
    	metadataStandardVersion: "æ_Metadata Standard Version_________Â",
    	referenceSystemInfo: "æ_Reference System______Â",
    	identificationInfo: "æ_Identification_____Â",
    	distributionInfo: "æ_Distribution_____Â",
    	dataQualityInfo: "æ_Quality___Â"
    },
    
    MD_ProgressCode: {
    	caption: "æ_Progress Code_____Â",
    	completed: "æ_Completed____Â",
    	historicalArchive: "æ_Historical Archive______Â",
    	obsolete: "æ_Obsolete___Â",
    	onGoing: "æ_On Going___Â",
    	planned: "æ_Planned___Â",
    	required: "æ_Required___Â",
    	underDevelopment: "æ_Under Development______Â"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "æ_Denominator____Â"
    },
    
    MD_Resolution: {
    	equivalentScale: "æ_Equivalent Scale______Â",
    	distance: "æ_Distance___Â"
    },
    
    MD_RestrictionCode: {
    	copyright: "æ_Copyright____Â",
    	patent: "æ_Patent___Â",
    	patentPending: "æ_Patent Pending_____Â",
    	trademark: "æ_Trademark____Â",
    	license: "æ_License___Â",
    	intellectualPropertyRights: "æ_Intellectual Property Rights_________Â",
    	restricted: "æ_Restricted____Â",
    	otherRestrictions: "æ_Other Restrictions______Â"
    },
    
    MD_ScopeCode: {
    	attribute: "æ_Attribute____Â",
    	attributeType: "æ_Attribute type_____Â",
    	collectionHardware: "æ_Collection hardware_______Â",
    	collectionSession: "æ_Collection session______Â",
    	dataset: "æ_Dataset___Â",
    	series: "æ_Series___Â",
    	nonGeographicDataset: "æ_Non geographic dataset________Â",
    	dimensionGroup: "æ_Dimension group______Â",
    	feature: "æ_Feature___Â",
    	featureType: "æ_Feature type_____Â",
    	propertyType: "æ_Property type_____Â",
    	fieldSession: "æ_Field session_____Â",
    	software: "æ_Software___Â",
    	service: "æ_Service___Â",
    	model: "æ_Model___Â",
    	tile: "æ_Tile__Â"
    },
    
    MD_ScopeDescription: {
    	attributes: "æ_Attributes____Â",
    	features: "æ_Features___Â",
    	featureInstances: "æ_Feature Instances______Â",
    	attributeInstances: "æ_Attribute Instances_______Â",
    	dataset: "æ_Dataset___Â",
    	other: "æ_Other___Â"
    },
    
    MD_SecurityConstraints: {
    	caption: "æ_Security Constraints_______Â",
    	classification: "æ_Classification_____Â",
    	userNote: "æ_User Note____Â",
    	classificationSystem: "æ_Classification System_______Â",
    	handlingDescription: "æ_Handling Description_______Â"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "æ_Spatial Representation Type_________Â",
    	vector: "æ_Vector___Â",
    	grid: "æ_Grid__Â",
    	textTable: "æ_Text Table____Â",
    	tin: "æ_TIN__Â",
    	stereoModel: "æ_Stereo Model_____Â",
    	video: "æ_Video___Â"
    },
    
    MD_TopicCategoryCode: {
    	caption: "æ_Topic Category_____Â",
    	boundaries: "æ_Administrative and Political Boundaries_____________Â",
    	farming: "æ_Agriculture and Farming________Â",
    	climatologyMeteorologyAtmosphere: "æ_Atmosphere and Climatic________Â",
    	biota: "æ_Biology and Ecology_______Â",
    	economy: "æ_Business and Economic_______Â",
    	planningCadastre: "æ_Cadastral____Â",
    	society: "æ_Cultural, Society and Demography___________Â",
    	elevation: "æ_Elevation and Derived Products__________Â",
    	environment: "æ_Environment and Conservation_________Â",
    	structure: "æ_Facilities and Structures_________Â",
    	geoscientificInformation: "æ_Geological and Geophysical_________Â",
    	health: "æ_Human Health and Disease________Â",
    	imageryBaseMapsEarthCover: "æ_Imagery and Base Maps_______Â",
    	inlandWaters: "æ_Inland Water Resources________Â",
    	location: "æ_Locations and Geodetic Networks__________Â",
    	intelligenceMilitary: "æ_Military___Â",
    	oceans: "æ_Oceans and Estuaries_______Â",
    	transportation: "æ_Transportation Networks________Â",
    	utilitiesCommunication: "æ_Utilities and Communication_________Â"
    },
    
    MI_ContextCode: {
    	caption: "æ_Context___Â",
    	acquisition: "æ_Acquisition____Â",
    	pass: "æ_Pass__Â",
    	wayPoint: "æ_Waypoint___Â"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "æ_Environmental Conditions________Â",
    	averageAirTemperature: "æ_Average Air Temperature________Â",
    	maxRelativeHumidity: "æ_Maximum Relative Humidity_________Â",
    	maxAltitude: "æ_Maximum Altitude______Â",
    	meterologicalConditions: "æ_Meterological Conditions________Â"
    },
    
    MI_Event: {
    	identifier: "æ_Event Identifier______Â",
    	time: "æ_Time__Â",
    	expectedObjectiveReference: "æ_Expected Objective (Objective Identifer)_____________Â",
    	relatedSensorReference: "æ_Related Sensor (Instrument Identifer)____________Â",
    	relatedPassReference: "æ_Related Pass (Platform Pass Identifer)____________Â"
    },

    MI_GeometryTypeCode: {
    	point: "æ_Point___Â",
    	linear: "æ_Linear___Â",
    	areal: "æ_Areal___Â",
    	strip: "æ_Strip___Â"
    },
    
    MI_Instrument: {
    	citation: "æ_Instrument Citation_______Â",
    	identifier: "æ_Instrument Identifier_______Â",
    	sType: "æ_Instrument Type______Â",
    	description: "æ_Instrument Description________Â",
    	mountedOn: "æ_Mounted On____Â",
    	mountedOnPlatformReference: "æ_Mounted On (Platform Identifier)___________Â"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "æ_Acquisition____Â"
    },
    
    MI_Objective: {
    	caption: "æ_Objective____Â",
    	identifier: "æ_Objective Identifier_______Â",
    	priority: "æ_Priority of Target______Â",
    	sFunction: "æ_Function of Objective_______Â",
    	extent: "æ_Extent___Â",
    	pass: "æ_Platform Pass_____Â",
    	sensingInstrumentReference: "æ_Sensing Instrument (Instrument Identifier)______________Â",
    	objectiveOccurrence: "æ_Events___Â",
    	sections: {
    		identification: "æ_Identification_____Â",
    		extent: "æ_Extent___Â",
    		pass: "æ_Pass__Â",
    		sensingInstrument: "æ_Sensing Instrument______Â",
    		objectiveOccurrence: "æ_Events___Â"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "æ_Type (Collection Technique for Objective)_____________Â",
    	instantaneousCollection: "æ_Instantaneous Collection________Â",
    	persistentView: "æ_Persistent View______Â",
    	survey: "æ_Survey___Â"
    },
    
    MI_Operation: {
    	caption: "æ_Operation____Â",
    	description: "æ_Operation Description_______Â",
    	citation: "æ_Operation Citation______Â",
    	identifier: "æ_Operation Identifier_______Â",
    	status: "æ_Operation Status______Â",
    	objectiveReference: "æ_Related Objective (Objective Identifier)_____________Â",
    	planReference: "æ_Related Plan (Plan Identifier)__________Â",
    	significantEventReference: "æ_Related Event (Event Identifier)___________Â",
    	platformReference: "æ_Related Platform (Platform Identifier)____________Â",
    	sections: {
    		identification: "æ_Identification_____Â",
    		related: "æ_Related___Â"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "æ_Operation Type_____Â",
    	real: "æ_Real__Â",
    	simulated: "æ_Simulated____Â",
    	synthesized: "æ_Synthesized____Â"
    },
    
    MI_Plan: {
    	sType: "æ_Sampling Geometry for Collecting Data____________Â",
    	status: "æ_Status of Plan_____Â",
    	citation: "æ_Citation of Authority Requesting Collection______________Â",
    	satisfiedRequirementReference: "æ_Satisfied Requirement (Requirement Identifier)_______________Â",
    	operationReference: "æ_Related Operation (Operation Identifier)_____________Â"
    },
    
    MI_Platform: {
    	citation: "æ_Platform Citation______Â",
    	identifier: "æ_Platform Identifier_______Â",
    	description: "æ_Description of Platform Supporting the Instrument________________Â",
    	sponsor: "æ_Sponsor Organization for Platform___________Â",
    	instrument: "æ_Instrument(s) mounted on the platform____________Â",
    	instrumentReference: "æ_Instrument Identifier_______Â",
    	sections: {
    		identification: "æ_Identification_____Â",
    		sponsor: "æ_Sponsor___Â",
    		instruments: "æ_Instruments____Â"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "æ_Platform Pass Identifier________Â",
    	extent: "æ_Platform Pass Extent_______Â",
    	relatedEventReference: "æ_Related Event (Event Identifer)__________Â"
    },

    MI_PriorityCode: {
    	critical: "æ_Critical___Â", 
    	highImportance: "æ_High Importance______Â",
    	mediumImportance: "æ_Medium Importance______Â",
    	lowImportance: "æ_Low Importance_____Â"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "æ_Requested Date Of Collection_________Â",
    	latestAcceptableDate: "æ_Latest Acceptable Date________Â"
    },
    
    MI_Requirement: {
    	caption: "æ_Requirement____Â",
    	citation: "æ_Citation for Requirement Guidance Material______________Â",
    	identifier: "æ_Requirement Identifier________Â",
    	requestor: "æ_Requestor of Requirement________Â",
    	recipient: "æ_Recipient of Requirement Results___________Â",
    	priority: "æ_Requirement Priority_______Â",
    	requestedDate: "æ_Requested Date_____Â",
    	expiryDate: "æ_Expiry Date____Â",
    	satisifiedPlanReference: "æ_Satisfied Plan (Plan Identifier)___________Â",
    	sections: {
    		identification: "æ_Identification_____Â",
    		requestor: "æ_Requestor____Â",
    		recipient: "æ_Recipient____Â",
    		priorityAndDates: "æ_Priority And Dates______Â",
    		satisifiedPlan: "æ_Satisified  Plan______Â"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "æ_Sequence___Â",
    	start: "æ_Start___Â",
    	end: "æ_End__Â",
    	instantaneous: "æ_Instantaneous_____Â"
    },
    
    MI_TriggerCode: {
    	caption: "æ_Trigger___Â",
    	automatic: "æ_Automatic____Â",
    	manual: "æ_Manual___Â",
    	preProgrammed: "æ_Preprogrammed_____Â"
    },
    
    ObjectReference: {
    	uuidref: "æ_UUID Reference_____Â",
    	xlinkref: "æ_URL Reference_____Â"
    },
    
    RS_Identifier: {
    	caption: "æ_ID Plus Code Space______Â",
    	code: "æ_Code__Â",
    	codeSpace: "æ_Code Space____Â"
    },
    
    SV_CouplingType: {
    	loose: "æ_Loose___Â",
    	mixed: "æ_Mixed___Â",
    	tight: "æ_Tight___Â"
    },
    
    SV_OperationMetadata: {
    	operationName: "æ_Operation Name_____Â",
    	DCP: "æ_DCP__Â",
    	connectPoint: "æ_Connect Point_____Â"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "æ_ServiceType____Â",
    	couplingType: "æ_Coupling Type_____Â",
    	containsOperations: "æ_Operation Metadata______Â",
    	operatesOn: "æ_Operates On____Â"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "æ_Indeterminate Position________Â",
    	indeterminates: {
    		before: "æ_Before___Â",
       	after: "æ_After___Â",
      	now: "æ_Now__Â",
      	unknown: "æ_Unknown___Â"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "æ_GEMET Concept Keyword_______Â",
    		tool: "æ_Look Up____Â...",
    		dialogTitle: "æ_GEMET - Concept Keyword________Â",
    		searchLabel: "æ_Search___Â:",
    		searchTip: "æ_Search GEMET_____Â"
    	},
    	theme: {
    		tool: "æ_Look Up____Â...",
    		dialogTitle: "æ_GEMET - Inspire Data Theme_________Â"
    	},
    	ioerror: "æ_There was an error communicating with the GEMET service: {url}____________________Â",
    	searching: "æ_Searching GEMET______Â...",
    	noMatch: "æ_No matching results were found__________Â.",
      languages: {
      	"bg": "æ_Bulgarian____Â",
      	"cs": "æ_Czech___Â",
      	"da": "æ_Danish___Â",
      	"nl": "æ_Dutch___Â",
      	"en": "æ_English___Â",
      	"et": "æ_Estonian___Â",
      	"fi": "æ_Finnish___Â",
      	"fr": "æ_French___Â",
      	"de": "æ_German___Â",
      	"el": "æ_Greek___Â",
      	"hu": "æ_Hungarian____Â",
      	"ga": "æ_Gaelic (Irish)_____Â",
      	"it": "æ_Italian___Â",
      	"lv": "æ_Latvian___Â",
      	"lt": "æ_Lithuanian____Â",
      	"mt": "æ_Maltese___Â",
      	"pl": "æ_Polish___Â", 
      	"pt": "æ_Portuguese____Â",
      	"ro": "æ_Romanian___Â",
      	"sk": "æ_Slovak___Â",
      	"sl": "æ_Slovenian____Â",  	
      	"es": "æ_Spanish___Â",
      	"sv": "æ_Swedish___Â"
      }
    }
   
  })
);
