define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ķ_ISO 19115 (Data)______ū",
    		description: ""
    	},
    	service: {
    		caption: "ķ_ISO 19119 (Service)_______ū",
    		description: ""
    	},
    	gmi: {
    		caption: "ķ_ISO 19115-2 (Imagery and Gridded Data)____________ū",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ķ_Reference____ū"
    },
    
    sections: {
    	metadata: "ķ_Metadata___ū",
    	identification: "ķ_Identification_____ū",
    	distribution: "ķ_Distribution_____ū",
    	quality: "ķ_Quality___ū",
    	acquisition: "ķ_Acquisition____ū"
    },
    
    metadataSection: {
    	identifier: "ķ_Identifier____ū",
    	contact: "ķ_Contact___ū",
    	date: "ķ_Date__ū",
    	standard: "ķ_Standard___ū",
    	reference: "ķ_Reference____ū"
    },
    
    identificationSection: {
    	citation: "ķ_Citation___ū",
    	description: "ķ_Description____ū",
    	contact: "ķ_Contact___ū",
    	thumbnail: "ķ_Thumbnail____ū",
    	keywords: "ķ_Keywords___ū",
    	constraints: "ķ_Constraints____ū",
    	resource: "ķ_Resource___ū",
    	resourceTab: {
    		representation: "ķ_Representation_____ū",
    		language: "ķ_Language___ū",
    		classification: "ķ_Classification_____ū",
    		extent: "ķ_Extent___ū"
    	},
    	serviceResourceTab: {
    		serviceType: "ķ_Service Type_____ū",
    		extent: "ķ_Extent___ū",
    		couplingType: "ķ_Coupling Type_____ū",
    		operation: "ķ_Operation____ū",
    		operatesOn: "ķ_Operates On____ū"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ķ_Scope___ū",
    	conformance: "ķ_Conformance____ū",
    	lineage: "ķ_Lineage___ū"
    },
    
    acquisitionSection: {
    	requirement: "ķ_Requirement____ū",
    	objective: "ķ_Objective____ū",
    	instrument: "ķ_Instrument____ū",
    	plan: "ķ_Plan__ū",
    	operation: "ķ_Operation____ū",
    	platform: "ķ_Platform___ū",
    	environment: "ķ_Environment____ū"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ķ_Abstract___ū",
    	purpose: "ķ_Purpose___ū",
    	credit: "ķ_Credits___ū",
    	pointOfContact: "ķ_Point of Contact______ū",
    	resourceMaintenance: "ķ_Maintenance____ū",
    	graphicOverview: "ķ_Graphic Overview______ū",
    	descriptiveKeywords: "ķ_Keyword Collection______ū",
    	resourceConstraints: "ķ_Constraints____ū"
    },
    
    CI_Address: {
    	deliveryPoint: "ķ_Delivery Point_____ū",
    	city: "ķ_City__ū",
    	administrativeArea: "ķ_Administrative Area_______ū",
    	postalCode: "ķ_Postal Code____ū",
    	country: "ķ_Country___ū",
    	electronicMailAddress: "ķ_E-Mail Address_____ū"
    },
    
    CI_Citation: {
    	title: "ķ_Title___ū",
    	alternateTitle: "ķ_Alternate Title______ū",
    	identifier: "ķ_Unique Resource Identifier_________ū",
    	resource: {
    		title: "ķ_Resource Title_____ū",
    		date: "ķ_Resource Date_____ū"
    	},
    	specification: {
    		title: "ķ_Specification Title_______ū",
    		date: "ķ_Specification Date______ū"
    	}
    },
    
    CI_Contact: {
    	phone: "ķ_Phone___ū",
    	address: "ķ_Address___ū",
    	onlineResource: "ķ_Online Resource______ū",
    	hoursOfService: "ķ_Hours of Service______ū",
    	contactInstructions: "ķ_Contact Instructions_______ū"
    },
    
    CI_Date: {
    	date: "ķ_Date__ū",
    	dateType: "ķ_Date Type____ū"
    },
    
  	CI_DateTypeCode: {
  		caption: "ķ_Date Type____ū",
  		creation: "ķ_Creation Date_____ū",
  		publication: "ķ_Publication Date______ū",
  		revision: "ķ_Revision Date_____ū"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ķ_Function___ū",
    	download: "ķ_Download___ū",
    	information: "ķ_Information____ū",
    	offlineAccess: "ķ_Offline Access_____ū",
    	order: "ķ_Order___ū",
    	search: "ķ_Search___ū"
    },
    
    CI_OnlineResource: {
    	caption: "ķ_Online Resource______ū",
    	linkage: "ķ_URL__ū",
    	protocol: "ķ_Protocol___ū",
    	applicationProfile: "ķ_Application Profile_______ū",
    	name: "ķ_Name__ū",
    	description: "ķ_Description____ū",
    	sFunction: "ķ_Function___ū"
    },
    
    CI_ResponsibleParty: {
    	caption: "ķ_Point of Contact______ū",
    	individualName: "ķ_Individual Name______ū",
    	organisationName: "ķ_Organisation Name______ū",
    	positionName: "ķ_Position Name_____ū",
    	contactInfo: "ķ_Contact Info_____ū",
    	role: "ķ_Role__ū"
    },
    
    CI_RoleCode: {
    	caption: "ķ_Role__ū",
    	resourceProvider: "ķ_Resource Provider______ū",
    	custodian: "ķ_Custodian____ū",
    	owner: "ķ_Owner___ū",
    	user: "ķ_User__ū",
    	distributor: "ķ_Distributor____ū",
    	originator: "ķ_Originator____ū",
    	pointOfContact: "ķ_Point of Contact______ū",
    	principalInvestigator: "ķ_Principal Investigator________ū",
    	processor: "ķ_Processor____ū",
    	publisher: "ķ_Publisher____ū",
    	author: "ķ_Author___ū"
    },
    
    CI_Telephone: {
    	voice: "ķ_Voice___ū",
    	facsimile: "ķ_Fax__ū"
    },
    
    DCPList: {
    	caption: "ķ_DCP__ū",
    	XML: "ķ_XML__ū",
    	CORBA: "ķ_CORBA___ū",
    	JAVA: "ķ_JAVA__ū",
    	COM: "ķ_COM__ū",
    	SQL: "ķ_SQL__ū",
    	WebServices: "ķ_WebServices____ū"
    },
    
    DQ_ConformanceResult: {
    	caption: "ķ_Conformance Result______ū",
    	explanation: "ķ_Explanation____ū",
    	degree: {
    		caption: "ķ_Degree___ū",
    		validationPerformed: "ķ_Validation Performed_______ū",
    		conformant: "ķ_Conformant____ū",
    		nonConformant: "ķ_Non Conformant_____ū"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ķ_Report___ū"
    },
    
    DQ_Scope : {
    	level: "ķ_Scope (quality information applies to)____________ū",
    	levelDescription: "ķ_Level Description______ū"
    },
    
    EX_Extent: {
    	caption: "ķ_Extent___ū",
    	description: "ķ_Description____ū",
    	geographicElement: "ķ_Spatial Extent_____ū",
    	temporalElement: "ķ_Temporal Extent______ū",
    	verticalElement: "ķ_Vertical Extent______ū"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ķ_West Bounding Longitude________ū",
    	eastBoundLongitude: "ķ_East Bounding Longitude________ū",
    	southBoundLatitude: "ķ_South Bounding Latitude________ū",
    	northBoundLatitude: "ķ_North Bounding Latitude________ū"
    },
    
    EX_GeographicDescription: {
    	caption: "ķ_Geographic Description________ū"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ķ_Begin Date____ū",
    		endPosition: "ķ_End Date___ū"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ķ_Minimum Value_____ū",
    	maximumValue: "ķ_Maximum Value_____ū",
    	verticalCRS: "ķ_Vertical CRS_____ū"
    },
    
    Length: {
    	caption: "ķ_Length___ū",
    	uom: "ķ_Units of Measure______ū",
    	km: "ķ_Kilometers____ū",
    	m: "ķ_Meters___ū",
    	mi: "ķ_Miles___ū",
    	ft: "ķ_Feet__ū"
    },
    
    LI_Lineage: {
    	statement: "ķ_Lineage Statement______ū"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ķ_Browse Graphic URL______ū",
    	fileDescription: "ķ_Browse Graphic Caption________ū",
    	fileType: "ķ_Browse Graphic Type_______ū"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ķ_Unclassified_____ū",
    	restricted: "ķ_Restricted____ū",
    	confidential: "ķ_Confidential_____ū",
    	secret: "ķ_Secret___ū",
    	topSecret: "ķ_Top Secret____ū"
    },
    
    MD_Constraints: {
    	caption: "ķ_Usage Constraints______ū",
    	useLimitation: "ķ_Use Limitation_____ū"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ķ_Spatial Representation Type_________ū",
    	spatialResolution: "ķ_Spatial Resolution______ū",
    	language: "ķ_Resource Language______ū",
    	supplementalInformation: "ķ_Supplemental_____ū"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ķ_Online___ū"
    },
    
    MD_Distribution: {
    	distributionFormat: "ķ_Distribution Format_______ū",
    	transferOptions: "ķ_Transfer Options______ū"
    },
    
    MD_Format: {
    	name: "ķ_Format Name____ū",
    	version: "ķ_Format Version_____ū"
    },
    
    MD_Identifier: {
    	caption: "ķ_URI__ū",
    	identifierCaption: "ķ_Identifier____ū",
    	code: "ķ_Code__ū"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ķ_Keywords___ū",
    	thesaurusName: "ķ_Associated Thesaurus_______ū"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ķ_Keyword Type_____ū",
    	discipline: "ķ_Discipline____ū",
    	place: "ķ_Place___ū",
    	stratum: "ķ_Stratum___ū",
    	temporal: "ķ_Temporal___ū",
    	theme: "ķ_Theme___ū"
    },
    
    MD_LegalConstraints: {
    	caption: "ķ_Legal Constraints______ū",
    	accessConstraints: "ķ_Access Constraints______ū",
    	useConstraints: "ķ_Use Constraints______ū",
    	otherConstraints: "ķ_Other Constraints______ū"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ķ_Frequency____ū",
    	continual: "ķ_Continual____ū",
    	daily: "ķ_Daily___ū",
    	weekly: "ķ_Weekly___ū",
    	fortnightly: "ķ_Fortnightly____ū",
    	monthly: "ķ_Monthly___ū",
    	quarterly: "ķ_Quarterly____ū",
    	biannually: "ķ_Biannually____ū",
    	annually: "ķ_Annually___ū",
    	asNeeded: "ķ_As Needed____ū",
    	irregular: "ķ_Irregular____ū",
    	notPlanned: "ķ_Not Planned____ū",
    	unknown: "ķ_Unknown___ū"
    },
    
    MD_Metadata: {
    	caption: "ķ_Metadata___ū",
    	fileIdentifier: "ķ_File Identifier______ū",
    	language: "ķ_Metadata Language______ū",
    	hierarchyLevel: "ķ_Hierarchy Level______ū",
    	hierarchyLevelName: "ķ_Hierarchy Level Name_______ū",
    	contact: "ķ_Metadata Contact______ū",
    	dateStamp: "ķ_Metadata Date_____ū",
    	metadataStandardName: "ķ_Metadata Standard Name________ū",
    	metadataStandardVersion: "ķ_Metadata Standard Version_________ū",
    	referenceSystemInfo: "ķ_Reference System______ū",
    	identificationInfo: "ķ_Identification_____ū",
    	distributionInfo: "ķ_Distribution_____ū",
    	dataQualityInfo: "ķ_Quality___ū"
    },
    
    MD_ProgressCode: {
    	caption: "ķ_Progress Code_____ū",
    	completed: "ķ_Completed____ū",
    	historicalArchive: "ķ_Historical Archive______ū",
    	obsolete: "ķ_Obsolete___ū",
    	onGoing: "ķ_On Going___ū",
    	planned: "ķ_Planned___ū",
    	required: "ķ_Required___ū",
    	underDevelopment: "ķ_Under Development______ū"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ķ_Denominator____ū"
    },
    
    MD_Resolution: {
    	equivalentScale: "ķ_Equivalent Scale______ū",
    	distance: "ķ_Distance___ū"
    },
    
    MD_RestrictionCode: {
    	copyright: "ķ_Copyright____ū",
    	patent: "ķ_Patent___ū",
    	patentPending: "ķ_Patent Pending_____ū",
    	trademark: "ķ_Trademark____ū",
    	license: "ķ_License___ū",
    	intellectualPropertyRights: "ķ_Intellectual Property Rights_________ū",
    	restricted: "ķ_Restricted____ū",
    	otherRestrictions: "ķ_Other Restrictions______ū"
    },
    
    MD_ScopeCode: {
    	attribute: "ķ_Attribute____ū",
    	attributeType: "ķ_Attribute type_____ū",
    	collectionHardware: "ķ_Collection hardware_______ū",
    	collectionSession: "ķ_Collection session______ū",
    	dataset: "ķ_Dataset___ū",
    	series: "ķ_Series___ū",
    	nonGeographicDataset: "ķ_Non geographic dataset________ū",
    	dimensionGroup: "ķ_Dimension group______ū",
    	feature: "ķ_Feature___ū",
    	featureType: "ķ_Feature type_____ū",
    	propertyType: "ķ_Property type_____ū",
    	fieldSession: "ķ_Field session_____ū",
    	software: "ķ_Software___ū",
    	service: "ķ_Service___ū",
    	model: "ķ_Model___ū",
    	tile: "ķ_Tile__ū"
    },
    
    MD_ScopeDescription: {
    	attributes: "ķ_Attributes____ū",
    	features: "ķ_Features___ū",
    	featureInstances: "ķ_Feature Instances______ū",
    	attributeInstances: "ķ_Attribute Instances_______ū",
    	dataset: "ķ_Dataset___ū",
    	other: "ķ_Other___ū"
    },
    
    MD_SecurityConstraints: {
    	caption: "ķ_Security Constraints_______ū",
    	classification: "ķ_Classification_____ū",
    	userNote: "ķ_User Note____ū",
    	classificationSystem: "ķ_Classification System_______ū",
    	handlingDescription: "ķ_Handling Description_______ū"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ķ_Spatial Representation Type_________ū",
    	vector: "ķ_Vector___ū",
    	grid: "ķ_Grid__ū",
    	textTable: "ķ_Text Table____ū",
    	tin: "ķ_TIN__ū",
    	stereoModel: "ķ_Stereo Model_____ū",
    	video: "ķ_Video___ū"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ķ_Topic Category_____ū",
    	boundaries: "ķ_Administrative and Political Boundaries_____________ū",
    	farming: "ķ_Agriculture and Farming________ū",
    	climatologyMeteorologyAtmosphere: "ķ_Atmosphere and Climatic________ū",
    	biota: "ķ_Biology and Ecology_______ū",
    	economy: "ķ_Business and Economic_______ū",
    	planningCadastre: "ķ_Cadastral____ū",
    	society: "ķ_Cultural, Society and Demography___________ū",
    	elevation: "ķ_Elevation and Derived Products__________ū",
    	environment: "ķ_Environment and Conservation_________ū",
    	structure: "ķ_Facilities and Structures_________ū",
    	geoscientificInformation: "ķ_Geological and Geophysical_________ū",
    	health: "ķ_Human Health and Disease________ū",
    	imageryBaseMapsEarthCover: "ķ_Imagery and Base Maps_______ū",
    	inlandWaters: "ķ_Inland Water Resources________ū",
    	location: "ķ_Locations and Geodetic Networks__________ū",
    	intelligenceMilitary: "ķ_Military___ū",
    	oceans: "ķ_Oceans and Estuaries_______ū",
    	transportation: "ķ_Transportation Networks________ū",
    	utilitiesCommunication: "ķ_Utilities and Communication_________ū"
    },
    
    MI_ContextCode: {
    	caption: "ķ_Context___ū",
    	acquisition: "ķ_Acquisition____ū",
    	pass: "ķ_Pass__ū",
    	wayPoint: "ķ_Waypoint___ū"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ķ_Environmental Conditions________ū",
    	averageAirTemperature: "ķ_Average Air Temperature________ū",
    	maxRelativeHumidity: "ķ_Maximum Relative Humidity_________ū",
    	maxAltitude: "ķ_Maximum Altitude______ū",
    	meterologicalConditions: "ķ_Meterological Conditions________ū"
    },
    
    MI_Event: {
    	identifier: "ķ_Event Identifier______ū",
    	time: "ķ_Time__ū",
    	expectedObjectiveReference: "ķ_Expected Objective (Objective Identifer)_____________ū",
    	relatedSensorReference: "ķ_Related Sensor (Instrument Identifer)____________ū",
    	relatedPassReference: "ķ_Related Pass (Platform Pass Identifer)____________ū"
    },

    MI_GeometryTypeCode: {
    	point: "ķ_Point___ū",
    	linear: "ķ_Linear___ū",
    	areal: "ķ_Areal___ū",
    	strip: "ķ_Strip___ū"
    },
    
    MI_Instrument: {
    	citation: "ķ_Instrument Citation_______ū",
    	identifier: "ķ_Instrument Identifier_______ū",
    	sType: "ķ_Instrument Type______ū",
    	description: "ķ_Instrument Description________ū",
    	mountedOn: "ķ_Mounted On____ū",
    	mountedOnPlatformReference: "ķ_Mounted On (Platform Identifier)___________ū"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ķ_Acquisition____ū"
    },
    
    MI_Objective: {
    	caption: "ķ_Objective____ū",
    	identifier: "ķ_Objective Identifier_______ū",
    	priority: "ķ_Priority of Target______ū",
    	sFunction: "ķ_Function of Objective_______ū",
    	extent: "ķ_Extent___ū",
    	pass: "ķ_Platform Pass_____ū",
    	sensingInstrumentReference: "ķ_Sensing Instrument (Instrument Identifier)______________ū",
    	objectiveOccurrence: "ķ_Events___ū",
    	sections: {
    		identification: "ķ_Identification_____ū",
    		extent: "ķ_Extent___ū",
    		pass: "ķ_Pass__ū",
    		sensingInstrument: "ķ_Sensing Instrument______ū",
    		objectiveOccurrence: "ķ_Events___ū"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ķ_Type (Collection Technique for Objective)_____________ū",
    	instantaneousCollection: "ķ_Instantaneous Collection________ū",
    	persistentView: "ķ_Persistent View______ū",
    	survey: "ķ_Survey___ū"
    },
    
    MI_Operation: {
    	caption: "ķ_Operation____ū",
    	description: "ķ_Operation Description_______ū",
    	citation: "ķ_Operation Citation______ū",
    	identifier: "ķ_Operation Identifier_______ū",
    	status: "ķ_Operation Status______ū",
    	objectiveReference: "ķ_Related Objective (Objective Identifier)_____________ū",
    	planReference: "ķ_Related Plan (Plan Identifier)__________ū",
    	significantEventReference: "ķ_Related Event (Event Identifier)___________ū",
    	platformReference: "ķ_Related Platform (Platform Identifier)____________ū",
    	sections: {
    		identification: "ķ_Identification_____ū",
    		related: "ķ_Related___ū"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ķ_Operation Type_____ū",
    	real: "ķ_Real__ū",
    	simulated: "ķ_Simulated____ū",
    	synthesized: "ķ_Synthesized____ū"
    },
    
    MI_Plan: {
    	sType: "ķ_Sampling Geometry for Collecting Data____________ū",
    	status: "ķ_Status of Plan_____ū",
    	citation: "ķ_Citation of Authority Requesting Collection______________ū",
    	satisfiedRequirementReference: "ķ_Satisfied Requirement (Requirement Identifier)_______________ū",
    	operationReference: "ķ_Related Operation (Operation Identifier)_____________ū"
    },
    
    MI_Platform: {
    	citation: "ķ_Platform Citation______ū",
    	identifier: "ķ_Platform Identifier_______ū",
    	description: "ķ_Description of Platform Supporting the Instrument________________ū",
    	sponsor: "ķ_Sponsor Organization for Platform___________ū",
    	instrument: "ķ_Instrument(s) mounted on the platform____________ū",
    	instrumentReference: "ķ_Instrument Identifier_______ū",
    	sections: {
    		identification: "ķ_Identification_____ū",
    		sponsor: "ķ_Sponsor___ū",
    		instruments: "ķ_Instruments____ū"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ķ_Platform Pass Identifier________ū",
    	extent: "ķ_Platform Pass Extent_______ū",
    	relatedEventReference: "ķ_Related Event (Event Identifer)__________ū"
    },

    MI_PriorityCode: {
    	critical: "ķ_Critical___ū", 
    	highImportance: "ķ_High Importance______ū",
    	mediumImportance: "ķ_Medium Importance______ū",
    	lowImportance: "ķ_Low Importance_____ū"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ķ_Requested Date Of Collection_________ū",
    	latestAcceptableDate: "ķ_Latest Acceptable Date________ū"
    },
    
    MI_Requirement: {
    	caption: "ķ_Requirement____ū",
    	citation: "ķ_Citation for Requirement Guidance Material______________ū",
    	identifier: "ķ_Requirement Identifier________ū",
    	requestor: "ķ_Requestor of Requirement________ū",
    	recipient: "ķ_Recipient of Requirement Results___________ū",
    	priority: "ķ_Requirement Priority_______ū",
    	requestedDate: "ķ_Requested Date_____ū",
    	expiryDate: "ķ_Expiry Date____ū",
    	satisifiedPlanReference: "ķ_Satisfied Plan (Plan Identifier)___________ū",
    	sections: {
    		identification: "ķ_Identification_____ū",
    		requestor: "ķ_Requestor____ū",
    		recipient: "ķ_Recipient____ū",
    		priorityAndDates: "ķ_Priority And Dates______ū",
    		satisifiedPlan: "ķ_Satisified  Plan______ū"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ķ_Sequence___ū",
    	start: "ķ_Start___ū",
    	end: "ķ_End__ū",
    	instantaneous: "ķ_Instantaneous_____ū"
    },
    
    MI_TriggerCode: {
    	caption: "ķ_Trigger___ū",
    	automatic: "ķ_Automatic____ū",
    	manual: "ķ_Manual___ū",
    	preProgrammed: "ķ_Preprogrammed_____ū"
    },
    
    ObjectReference: {
    	uuidref: "ķ_UUID Reference_____ū",
    	xlinkref: "ķ_URL Reference_____ū"
    },
    
    RS_Identifier: {
    	caption: "ķ_ID Plus Code Space______ū",
    	code: "ķ_Code__ū",
    	codeSpace: "ķ_Code Space____ū"
    },
    
    SV_CouplingType: {
    	loose: "ķ_Loose___ū",
    	mixed: "ķ_Mixed___ū",
    	tight: "ķ_Tight___ū"
    },
    
    SV_OperationMetadata: {
    	operationName: "ķ_Operation Name_____ū",
    	DCP: "ķ_DCP__ū",
    	connectPoint: "ķ_Connect Point_____ū"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ķ_ServiceType____ū",
    	couplingType: "ķ_Coupling Type_____ū",
    	containsOperations: "ķ_Operation Metadata______ū",
    	operatesOn: "ķ_Operates On____ū"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ķ_Indeterminate Position________ū",
    	indeterminates: {
    		before: "ķ_Before___ū",
       	after: "ķ_After___ū",
      	now: "ķ_Now__ū",
      	unknown: "ķ_Unknown___ū"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ķ_GEMET Concept Keyword_______ū",
    		tool: "ķ_Look Up____ū...",
    		dialogTitle: "ķ_GEMET - Concept Keyword________ū",
    		searchLabel: "ķ_Search___ū:",
    		searchTip: "ķ_Search GEMET_____ū"
    	},
    	theme: {
    		tool: "ķ_Look Up____ū...",
    		dialogTitle: "ķ_GEMET - Inspire Data Theme_________ū"
    	},
    	ioerror: "ķ_There was an error communicating with the GEMET service: {url}____________________ū",
    	searching: "ķ_Searching GEMET______ū...",
    	noMatch: "ķ_No matching results were found__________ū.",
      languages: {
      	"bg": "ķ_Bulgarian____ū",
      	"cs": "ķ_Czech___ū",
      	"da": "ķ_Danish___ū",
      	"nl": "ķ_Dutch___ū",
      	"en": "ķ_English___ū",
      	"et": "ķ_Estonian___ū",
      	"fi": "ķ_Finnish___ū",
      	"fr": "ķ_French___ū",
      	"de": "ķ_German___ū",
      	"el": "ķ_Greek___ū",
      	"hu": "ķ_Hungarian____ū",
      	"ga": "ķ_Gaelic (Irish)_____ū",
      	"it": "ķ_Italian___ū",
      	"lv": "ķ_Latvian___ū",
      	"lt": "ķ_Lithuanian____ū",
      	"mt": "ķ_Maltese___ū",
      	"pl": "ķ_Polish___ū", 
      	"pt": "ķ_Portuguese____ū",
      	"ro": "ķ_Romanian___ū",
      	"sk": "ķ_Slovak___ū",
      	"sl": "ķ_Slovenian____ū",  	
      	"es": "ķ_Spanish___ū",
      	"sv": "ķ_Swedish___ū"
      }
    }
   
  })
);
